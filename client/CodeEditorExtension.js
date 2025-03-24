// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';

import { getEditor } from '../lib';

import { Modal } from './components';
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
export default ({ subscribe }) => {
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

  useEffect(() => {
    if (eventBus) {
      eventBus.on(OPEN_SCRIPT, handleOpenScript);
      return () => eventBus.off(handleOpenScript);
    }
  }, [ eventBus, handleOpenScript ]);

  return <Fragment>
    {
      isCodeEditorOpen && (
        <Modal title="Code Editor" onClose={ handleModalClose }>
          {
            editorDocuments.map(currentDocument => {
              const onChange = newValue => setEditorDocuments(documents => {
                const currentIndex = documents.findIndex(e => e === currentDocument);
                if (currentIndex < 0) {
                  return documents;
                } else {
                  const copyDocuments = [ ...documents ];
                  copyDocuments.splice(currentIndex, 1, { ...currentDocument, value: newValue });
                  return copyDocuments;
                }
              });

              const { element, moddleElement, language, value } = currentDocument;
              const Editor = getEditor(language);
              return <Editor element={ element } moddleElement={ moddleElement } value={ value } onChange={ onChange } />;
            })
          }
        </Modal>
      )
    }
  </Fragment>;
};
