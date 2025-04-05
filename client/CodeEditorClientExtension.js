// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';

import search from 'diagram-js/lib/features/search/search';
import { isLabel } from 'diagram-js/lib/util/ModelUtil';
import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import { getEditableTypes } from '../lib';

import { ElementsIDE, Modal, ModalHeader, ModalBody, withTheme } from './components';
import { useModeler, useService } from './hooks';
import { CLOSE_EDITOR, OPEN_ELEMENT } from './utils/events';

/**
 * The component props include everything the Application offers plugins,
 * which includes:
 * - config: save and retrieve information to the local configuration
 * - subscribe: hook into application events, like <tab.saved>, <app.activeTabChanged> ...
 * - triggerAction: execute editor actions, like <save>, <open-diagram> ...
 * - log: log information into the Log panel
 * - displayNotification: show notifications inside the application
 */
const CodeEditorClientExtension = ({ subscribe }) => {
  const [ isCodeEditorOpen, setCodeEditorOpen ] = useState(false);

  const [ editorDocuments, setEditorDocuments ] = useState([]);

  const [ modeler ] = useModeler({ subscribe, useCallback, useEffect, useState });
  const [ eventBus, elementRegistry, commandStack ] = useService({ modeler, services: [ 'eventBus', 'elementRegistry', 'commandStack' ], useMemo });

  const handleOpenScript = useCallback(({ element, moddleElement }) => {
    setEditorDocuments(documents => {
      if (documents.some(e => e.moddleElement === moddleElement)) {
        return documents;
      }
      return [
        ...documents,
        {
          element,
          moddleElement,
        }
      ];
    });
    setCodeEditorOpen(true);
  }, [ setCodeEditorOpen, setEditorDocuments ]);

  useEffect(() => {
    if (eventBus) {
      eventBus.on(OPEN_ELEMENT, handleOpenScript);
      return () => eventBus.off(handleOpenScript);
    }
  }, [ eventBus, handleOpenScript ]);

  const handleModalClose = useCallback(() => {
    if (eventBus) {
      eventBus.fire(CLOSE_EDITOR);
    }
    setCodeEditorOpen(false);
    setEditorDocuments([]);
  }, [ eventBus, editorDocuments, setEditorDocuments, setCodeEditorOpen ]);

  const handleDocumentClose = useCallback(({ index }) => {
    setEditorDocuments(documents => {
      const copyDocuments = [ ...documents ];
      copyDocuments.splice(index, 1);
      return copyDocuments;
    });

  }, [ eventBus, setEditorDocuments ]);

  const handleSearch = useCallback((searchValue) => {

    const searchableElements = elementRegistry
      .filter(e => !isLabel(e))
      .flatMap(e => {
        return Object.values(getEditableTypes()).flatMap(typeDefinition => {
          return typeDefinition.search.toSearchables(e).map(s => ({
            element: e,
            moddleElement: s,
            id: e.id,
            label: getLabel(e),
          }));
        });
      });

    const filteredElements = searchValue
      ? search(searchableElements, searchValue, {
        keys: [ 'label', 'id ' ],
      }).map(({ item }) => item)
      : searchableElements;

    return filteredElements.map(({ element, moddleElement }) => {
      return ({
        item: {
          element,
          moddleElement,
        },
        disabled: editorDocuments.some(doc => doc.moddleElement === moddleElement)
      });
    });
  });

  const handleOpen = useCallback(({ element, moddleElement }) => {
    if (eventBus) {
      eventBus.fire(OPEN_ELEMENT, { element, moddleElement });
    }
  });

  return <Fragment>
    <Modal open={ isCodeEditorOpen } onClose={ handleModalClose }>
      <ModalHeader>Code Editor</ModalHeader>
      <ModalBody hasScrollingContent={ false }>
        <ElementsIDE width="80vw" height="80vh" elements={ editorDocuments } commandStack={ commandStack } onClose={ handleDocumentClose } onSearch={ handleSearch } onOpen={ handleOpen } />
      </ModalBody>
    </Modal>
  </Fragment>;
};

export default withTheme(CodeEditorClientExtension, React);
