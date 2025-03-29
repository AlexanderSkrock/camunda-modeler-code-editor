// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';

import search from 'diagram-js/lib/features/search/search';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

import { ElementsIDE, Modal, ModalHeader, ModalBody, withTheme } from './components';
import { useModeler, useService } from './hooks';
import { getType } from './utils/elements';
import { CLOSE_EDITOR, OPEN_ELEMENT } from './utils/events';
import { isLabel } from 'diagram-js/lib/util/ModelUtil';
import { getEditableType, getEditableTypes } from '../lib';
import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

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
    const typeName = getType(moddleElement);
    const typeAccessors = getEditableType(typeName).accessors;

    setEditorDocuments(documents => {
      if (documents.some(e => e.moddleElement === moddleElement)) {
        return documents;
      }
      return [
        ...documents,
        {
          element,
          moddleElement,
          language: typeAccessors.getLanguage(moddleElement),
          value: typeAccessors.getValue(moddleElement),
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

  const modifyElement = useCallback((element, moddleElement, properties) => {
    commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement,
      properties,
    });
  }, [ commandStack ]);

  const handleModalClose = useCallback(() => {
    if (eventBus) {
      editorDocuments.forEach(({ element, moddleElement, value }) => {

        const typeName = getType(moddleElement);
        getEditableType(typeName).accessors.setValue(modifyElement, element, moddleElement, value);
      });
      eventBus.fire(CLOSE_EDITOR);
    }
    setCodeEditorOpen(false);
    setEditorDocuments([]);
  }, [ eventBus, editorDocuments, setEditorDocuments, setCodeEditorOpen ]);

  const onDocumentChange = useCallback(({ index, value }) => setEditorDocuments(documents => {
    const documentAtIndex = documents[index];
    if (documentAtIndex) {
      const copyDocuments = [ ...documents ];
      copyDocuments.splice(index, 1, { ...documentAtIndex, value });
      return copyDocuments;
    } else {
      return documents;
    }
  }), [ setEditorDocuments ]);

  const handleDocumentClose = useCallback(({ index }) => {
    setEditorDocuments(documents => {
      const copyDocuments = [ ...documents ];
      const removedDocuments = copyDocuments.splice(index, 1);
      if (eventBus) {
        removedDocuments.forEach(({ element, moddleElement, value }) => {
          const typeName = getType(moddleElement);
          getEditableType(typeName).accessors.setValue(modifyElement, element, moddleElement, value);
        });
      }
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
            id: getBusinessObject(e).id,
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
      const typeName = getType(moddleElement);
      const typeAccessors = getEditableType(typeName).accessors;
      return ({
        item: {
          element,
          moddleElement,
          language: typeAccessors.getLanguage(moddleElement),
          value: typeAccessors.getValue(moddleElement),
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
      <ModalBody>
        <ElementsIDE elements={ editorDocuments } onChange={ onDocumentChange } onClose={ handleDocumentClose } onSearch={ handleSearch } onOpen={ handleOpen } />
      </ModalBody>
    </Modal>
  </Fragment>;
};

export default withTheme(CodeEditorClientExtension, React);
