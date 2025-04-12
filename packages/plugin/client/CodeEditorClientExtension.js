import React, { Fragment, useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';

import search from 'diagram-js/lib/features/search/search';
import { isLabel } from 'diagram-js/lib/util/ModelUtil';
import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import { getEditableTypes } from '@camunda-modeler-code-editor/api';

import { ElementsIDE, Modal, ModalHeader, ModalBody, Theme } from './components';
import { useModeler, useService } from './hooks/modeler';
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

  const [ modeler ] = useModeler({ subscribe });
  const [ eventBus, elementRegistry, commandStack ] = useService({ modeler, services: [ 'eventBus', 'elementRegistry', 'commandStack' ] });

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

  }, [ setEditorDocuments ]);

  const handleSearch = useCallback((searchValue) => {
    const searchFunction = searchValue
      ? (elements) => {
        const searchables = elements.map(({ element, moddleElement }) => ({
          element,
          moddleElement,
          id: element.id,
          label: getLabel(element),
        }));
        return search(searchables, searchValue, {
          keys: [ 'label', 'id' ],
        });
      }

      // the fallback for "show all" misses the "tokens" field next to "items"
      // for now it does not matter, but in case we use it later, we need to be aware.
      : elements => elements.map(element => ({ item: element }));

    const searchableElements = elementRegistry.filter(element => !isLabel(element));

    const subSearchPromises = getEditableTypes().flatMap(type => {
      if (!type.search) {
        return Promise.resolve([]);
      }
      return type.search(searchableElements, searchFunction).then(subResults => subResults.map(({ item: { element, moddleElement } }) => ({
        item: {
          element,
          moddleElement,
          type: type.id,
        },
        disabled: editorDocuments.some(doc => doc.moddleElement === moddleElement)
      })));
    });
    return Promise.all(subSearchPromises).then(subResults => subResults.flat());
  }, [ elementRegistry, editorDocuments ]);

  const handleOpen = useCallback(({ element, moddleElement, type }) => {
    if (eventBus) {
      eventBus.fire(OPEN_ELEMENT, { element, moddleElement, elementType: type });
    }
  });

  return (
    <Fragment>
      <Theme>
        <Modal open={ isCodeEditorOpen } onClose={ handleModalClose } containerClassName={ styles.ideDialog }>
          <ModalHeader className={ styles.ideDialogHeader }>Code Editor</ModalHeader>
          <ModalBody>
            <ElementsIDE width="100%" height="100%" elements={ editorDocuments } commandStack={ commandStack } onClose={ handleDocumentClose } onSearch={ handleSearch } onOpen={ handleOpen } />
          </ModalBody>
        </Modal>
      </Theme>
    </Fragment>
  );
};

export default CodeEditorClientExtension;
