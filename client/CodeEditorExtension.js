// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';

import { ElementsIDE, Modal, ModalHeader, ModalBody, withTheme } from './components';
import { useModeler, useService } from './hooks';
import { CLOSE_EDITOR, OPEN_SCRIPT, UPDATE_SCRIPT } from './utils/events';

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
  const [ eventBus ] = useService({ modeler, services: [ 'eventBus' ], useMemo });

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

  return <Fragment>
    <Modal open={ isCodeEditorOpen } onClose={ handleModalClose }>
      <ModalHeader>Code Editor</ModalHeader>
      <ModalBody>
        <ElementsIDE elements={ editorDocuments } onChange={ onDocumentChange } onClose={ handleDocumentClose } />
      </ModalBody>
    </Modal>
  </Fragment>;
};

export default withTheme(CodeEditorExtension, React);
