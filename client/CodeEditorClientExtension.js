// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';

import search from 'diagram-js/lib/features/search/search';
import { isLabel } from 'diagram-js/lib/util/ModelUtil';
import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import { getEditableTypes } from '../lib';

import { ElementsIDE, Modal, ModalHeader, ModalBody, withTheme } from './components';
import { useModeler, useService } from './hooks';
import { CLOSE_EDITOR, OPEN_ELEMENT } from './utils/events';

import * as styles from './CodeEditorClientExtension.module.scss';

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

  const handleOpenScript = useCallback(({ element, moddleElement, elementType }) => {
    setEditorDocuments(documents => {
      if (documents.some(e => e.moddleElement === moddleElement)) {
        return documents;
      }
      return [
        ...documents,
        {
          element,
          moddleElement,
          type: elementType,
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
    if (!searchValue) {
      return [];
    }
    const searchFunction = (element, moddleElements) => {
      const searchables = moddleElements.map(moddleElement => ({
        element,
        moddleElement,
        id: element.id,
        label: getLabel(element),
      }));
      return search(searchables, searchValue, {
        keys: [ 'label', 'id ' ],
      });
    };

    return elementRegistry.filter(element => !isLabel(element)).flatMap(element => {
      return getEditableTypes().flatMap(type => {
        if (!type.search) {
          return [];
        }
        return type.search(element, searchFunction).map(({ item: { element, moddleElement } }) => ({
          item: {
            element,
            moddleElement,
            type: type.id,
          },
          disabled: editorDocuments.some(doc => doc.moddleElement === moddleElement)
        }));
      });
    });
  });

  const handleOpen = useCallback(({ element, moddleElement, type }) => {
    if (eventBus) {
      eventBus.fire(OPEN_ELEMENT, { element, moddleElement, elementType: type });
    }
  });

  return <Fragment>
    <Modal open={ isCodeEditorOpen } onClose={ handleModalClose } containerClassName={ styles.ideDialog }>
      <ModalHeader className={ styles.ideDialogHeader }>Code Editor</ModalHeader>
      <ModalBody>
        <ElementsIDE width="100%" height="100%" elements={ editorDocuments } commandStack={ commandStack } onClose={ handleDocumentClose } onSearch={ handleSearch } onOpen={ handleOpen } />
      </ModalBody>
    </Modal>
  </Fragment>;
};

export default withTheme(CodeEditorClientExtension, React);
