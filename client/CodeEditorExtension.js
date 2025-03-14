/* eslint-disable no-unused-vars*/
import React, { Fragment, useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';

import { withCustomEditorActions } from "./CustomEditorActionsMiddleware";
import {OPEN_CODE_EDITOR, SAVE_CODE_EDITOR} from "./utils/EventHelper";
import CodeEditorModal from "./CodeEditorModal";

const EXTENSION_NAME = 'code-editor';
const CONFIG_SEGMENT = 'config';

const OPEN_EXTENSION_CONFIGURATION_ACTION = 'open-code-editor-configuration';

const DEFAULT_CONFIGURATION = {
};

/**
 * The component props include everything the Application offers plugins,
 * which includes:
 * - config: save and retrieve information to the local configuration
 * - subscribe: hook into application events, like <tab.saved>, <app.activeTabChanged> ...
 * - triggerAction: execute editor actions, like <save>, <open-diagram> ...
 * - log: log information into the Log panel
 * - displayNotification: show notifications inside the application
 */
export default ({ config, subscribe, displayNotification }) => {
    const [extensionConfiguration, setExtensionConfiguration] = useState(DEFAULT_CONFIGURATION);
    const [isConfigShown, setConfigShown] = useState(false);

    const [isCodeEditorOpen, setCodeEditorOpen] = useState(false);
    const [ codeText, setCodeText ] = useState("");

    const [ modeler, setModeler ] = useState();
    const [ eventBus, setEventBus ] = useState();
    const [ tabModeler, setTabModeler ] = useState([]);

    const [ element, setElement ] = useState();

    useEffect(() => {
        const bpmnSubscription = subscribe('bpmn.modeler.configure', (event) => {
            event.middlewares.push(withCustomEditorActions({ [OPEN_EXTENSION_CONFIGURATION_ACTION]: () => setConfigShown(true) }));
        });
        const dmnSubscription = subscribe('dmn.modeler.configure', (event) => {
            event.middlewares.push(withCustomEditorActions({ [OPEN_EXTENSION_CONFIGURATION_ACTION]: () => setConfigShown(true) }));
        });
        return () => bpmnSubscription.cancel() && dmnSubscription.cancel();
    }, []);

    useEffect(() => {
        config.getForPlugin(EXTENSION_NAME, CONFIG_SEGMENT, DEFAULT_CONFIGURATION).then(setExtensionConfiguration);
    }, [config, setExtensionConfiguration])

    const handleConfigFormSubmit = useCallback((updatedConfiguration) => {
        setConfigShown(false);

        if (updatedConfiguration) {
            setExtensionConfiguration(updatedConfiguration);
            config.setForPlugin(EXTENSION_NAME, CONFIG_SEGMENT, updatedConfiguration)
                .then(() => {
                    displayNotification({
                        title: "Saved",
                        content: "Configuration was successfully saved."
                    })
                }).catch(console.error);
        }
    }, [setConfigShown, setExtensionConfiguration]);

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
        const saveTab = ({ activeTab }) => {
            if (activeTab.file && activeTab.file.path) {

                // trigger a tab save operation
                triggerAction('save')
                    .then(tab => {
                        if (!tab) {
                            return displayNotification({ title: 'Failed to save' });
                        }
                    });
            }
        };

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

            // Seems to have a problem with DMN, need some checks. Will temporarily be commented
            // saveTab(tab);
        });

        subscribe('close-all-tabs', saveTab);
    }, []);

    const handleEditorChange = useCallback(({ value }) => {
        setCodeText(value);

    }, [eventBus, element]);

    const handleClose = useCallback(() => {
        setCodeEditorOpen(false);
        eventBus.fire(SAVE_CODE_EDITOR, {
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
