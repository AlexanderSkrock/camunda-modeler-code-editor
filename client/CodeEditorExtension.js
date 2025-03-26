// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';

import search from 'diagram-js/lib/features/search/search';
import { is, getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

import { ElementsIDE, Modal, ModalHeader, ModalBody, withTheme } from './components';
import { useModeler, useService } from './hooks';
import { CLOSE_EDITOR, OPEN_SCRIPT, UPDATE_SCRIPT } from './utils/events';
import { getScriptFormat, getScriptType } from './bpmn-js/props/ScriptProps';
import { getScriptProperty } from './bpmn-js/utils/scripts';

/**
 * The component props include everything the Application offers plugins,
 * which includes:
 * - config: save and retrieve information to the local configuration
 * - subscribe: hook into application events, like <tab.saved>, <app.activeTabChanged> ...
 * - triggerAction: execute editor actions, like <save>, <open-diagram> ...
 * - log: log information into the Log panel
 * - displayNotification: show notifications inside the application
 */
const CodeEditorExtension = ({ subscribe }) => {
  const [ isCodeEditorOpen, setCodeEditorOpen ] = useState(false);

  const [ editorDocuments, setEditorDocuments ] = useState([]);

  const [ modeler ] = useModeler({ subscribe, useCallback, useEffect, useState });
  const [ eventBus, elementRegistry ] = useService({ modeler, services: [ 'eventBus', 'elementRegistry' ], useMemo });

  const handleOpenScript = useCallback(({ element, moddleElement, language, value }) => {
    setEditorDocuments(documents => {
      if (documents.some(e => e.moddleElement === moddleElement)) {
        return documents;
      }
      return [
        ...documents,
        {
          element,
          moddleElement,
          language,
          value
        }
      ];
    });
    setCodeEditorOpen(true);
  }, [ setCodeEditorOpen, setEditorDocuments ]);

  useEffect(() => {
    if (eventBus) {
      eventBus.on(OPEN_SCRIPT, handleOpenScript);
      return () => eventBus.off(handleOpenScript);
    }
  }, [ eventBus, handleOpenScript ]);

  const handleModalClose = useCallback(() => {
    if (eventBus) {
      editorDocuments.forEach(({ element, moddleElement, value }) => {
        eventBus.fire(UPDATE_SCRIPT, {
          element,
          moddleElement,
          value,
        });
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
          eventBus.fire(UPDATE_SCRIPT, {
            element,
            moddleElement,
            value,
          });
        });
      }
      return copyDocuments;
    });

  }, [ eventBus, setEditorDocuments ]);

  const handleSearch = useCallback((searchValue) => {

    // TODO we should not access functions from our bpmn js sub directory
    const searchableElements = elementRegistry

      // for sake of simplicity we only filter for classic script tasks with inline scripts
      // TODO later we should also include elements that have scripts e. g. in form of execution listeners or input output mappings
      .filter(element => is(element, 'bpmn:ScriptTask') && getScriptType(element) === 'script')
      .flatMap(element => {

        // TODO we should return an array of sripts on this element, for now we only pick the script task itself
        const moddleElement = getBusinessObject(element);
        return [ {
          element,
          moddleElement,
          language: getScriptFormat(moddleElement),
          value: moddleElement.get(getScriptProperty(moddleElement)),
        } ];
      })
      .map(item => ({
        item,
        id: item.moddleElement.id,
        label: item.moddleElement.name,

        // TODO consider to enable full text search trough code
      }));

    if (!searchValue) {
      return searchableElements.map(({ item }) => item);
    }

    return search(searchableElements, searchValue, {
      keys: [ 'label', 'id ' ],
    }).map(({ item: { item } }) => item);

    // TODO add flag for documents that are already open
  });

  const handleOpen = useCallback(({ element, moddleElement, language, value }) => {

    // Oder die Werte aus hier aus dem moddleElement ermitteln?
    handleOpenScript({ element, moddleElement, language, value });
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

export default withTheme(CodeEditorExtension, React);
