import { useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';

export default ({ subscribe }) => {
  const [ , setBpmnModelerCreatedSubscribtion ] = useState();
  const [ , setDmnModelerCreatedSubscribtion ] = useState();
  const [ , setActiveTabChangedSubscription ] = useState();

  const [ activeModeler, setActiveModeler ] = useState();
  const [ tabModelers, setTabModelers ] = useState([]);

  const initModeler = useCallback(({ modeler, tab }) => {
    setActiveModeler(modeler);
    setTabModelers(prevTabModeler => ({
      ...prevTabModeler,
      [tab.id]: modeler,
    }));
  }, [ setActiveModeler, setTabModelers ]);

  const handleTabChanged = useCallback((tab) => {
    const activeTabId = tab.activeTab.id;

    setTabModelers(prevTabModeler => {
      const activeTabModeler = tabModelers[activeTabId];
      if (activeTabModeler) {
        setActiveModeler(activeTabModeler);
      }
      return prevTabModeler;
    });
  }, [ tabModelers, setTabModelers, setActiveModeler ]);

  useEffect(() => {
    setBpmnModelerCreatedSubscribtion(prevSubscription => {
      if (prevSubscription) {
        prevSubscription.cancel();
      }
      return subscribe('bpmn.modeler.created', ({ modeler, tab }) => initModeler({ modeler, tab }));
    });
  }, [ initModeler ]);

  useEffect(() => {
    setDmnModelerCreatedSubscribtion(prevSubscription => {
      if (prevSubscription) {
        prevSubscription.cancel();
      }
      return subscribe('dmn.modeler.created', ({ modeler, tab }) => initModeler({ modeler, tab }));
    });

  }, [ initModeler ]);

  useEffect(() => {
    setActiveTabChangedSubscription(prevSubscription => {
      if (prevSubscription) {
        prevSubscription.cancel();
      }
      return subscribe('app.activeTabChanged', handleTabChanged);
    });
  }, [ handleTabChanged ]);

  return [ activeModeler ];
};
