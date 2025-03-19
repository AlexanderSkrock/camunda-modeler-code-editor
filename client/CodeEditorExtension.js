// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback, useState } from 'camunda-modeler-plugin-helpers/react';

import DefaultCodeEditor from './components/DefaultCodeEditor';
import Modal from './components/Modal';
import useModeler from './hooks/useModeler';
import useService from './hooks/useService';
import useCodeEditorEvents from './hooks/useCodeEditorEvents';

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
  const [ codeText, setCodeText ] = useState('');

  const [ modeler ] = useModeler({ subscribe });
  const [ eventBus ] = useService({ modeler, service: 'eventBus' });

  const handleCodeEditorOpen = useCallback((evt) => {
    setCodeText(evt.value);
    setCodeEditorOpen(true);
  }, [ setCodeText, setCodeEditorOpen ]);

  const handleCodeEditorClose = useCallback(() => {
    setCodeEditorOpen(false);
    setCodeText('');
  }, [ codeText, setCodeEditorOpen ]);

  const [ , closeEditor ] = useCodeEditorEvents({
    eventBus,
    priority: 1,
    onOpen: handleCodeEditorOpen,
    onClose: handleCodeEditorClose
  });

  const handleModalClose = useCallback(() => {
    closeEditor({ value: codeText });
  }, [ codeText, closeEditor ]);

  return <Fragment>
    {
      isCodeEditorOpen && (
        <Modal title="Code Editor" onClose={ handleModalClose }>
          <DefaultCodeEditor value={ codeText } onChange={ setCodeText } />
        </Modal>
      )
    }
  </Fragment>;
};
