import React, { Fragment, useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';

import {OPEN_CODE_EDITOR, CLOSE_CODE_EDITOR} from "./utils/events";
import CodeEditorModal from "./CodeEditorModal";

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
    const [isCodeEditorOpen, setCodeEditorOpen] = useState(false);
    const [ codeText, setCodeText ] = useState("");

    const [ modeler, setModeler ] = useState();
    const [ eventBus, setEventBus ] = useState();
    const [ tabModeler, setTabModeler ] = useState([]);

    const [ element, setElement ] = useState();

    useEffect(() => {
        if (eventBus) {
            eventBus.on(OPEN_CODE_EDITOR, (evt) => {
                setElement(evt.element);
                setCodeText(evt.data);
                setCodeEditorOpen(true)
            });
        }
    }, [eventBus, setCodeEditorOpen]);

    useEffect(() => {
        const initModeler = ({ modeler, tab }) => {
            setModeler(modeler);
            setTabModeler(prevTabModeler => ([ ...prevTabModeler, { tabId: tab.id, modeler: modeler } ]));
        };

        subscribe('bpmn.modeler.created', ({ modeler, tab }) => {
            setEventBus(modeler.get('eventBus'));

            initModeler({ modeler, tab });
        });

        subscribe('dmn.modeler.created', ({ modeler, tab }) => {
            setEventBus(modeler._eventBus);

            initModeler({ modeler, tab });
        });

        subscribe('app.activeTabChanged', tab => {
            let activeTabId = tab.activeTab.id;

            const activeModeler = tabModeler.find(o => o.tabId === activeTabId);
            if (activeModeler) {

                if (activeModeler.modeler?.get) {
                    setEventBus(activeModeler.modeler.get('eventBus'));
                } else if (activeModeler.modeler?._eventBus) {
                    setEventBus(activeModeler.modeler._eventBus);
                }

                setModeler(activeModeler.modeler);
            }
        });
    }, []);

    const handleEditorChange = useCallback(({ value }) => {
        setCodeText(value);

    }, [eventBus, element]);

    const handleClose = useCallback(() => {
        setCodeEditorOpen(false);
        eventBus.fire(CLOSE_CODE_EDITOR, {
          element,
          data: codeText,
        });
    }, [eventBus, element, codeText]);

    return <Fragment>
        {
            isCodeEditorOpen && (
                <CodeEditorModal title="Code Editor" code={ codeText } onChange={ handleEditorChange } onClose={ handleClose } />
            )
        }
    </Fragment>
}
