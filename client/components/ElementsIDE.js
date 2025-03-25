// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@carbon/react';

import { getEditor } from '../../lib';

export default ({ elements, onChange, onClose }) => {
  const [ selectedIndex, selectIndex ] = useState(0);
  useEffect(() => {
    if (selectedIndex < 0 || selectIndex >= elements.length) {
      selectIndex(0);
    }
  }, [ elements, selectIndex ]);

  const handleTabChange = useCallback(({ selectedIndex }) => {
    selectIndex(selectedIndex);
  }, [ selectIndex ]);

  const handleTabCloseRequested = useCallback(index => {
    onClose({
      index,
    });
  }, [ onClose ]);

  return (
    <Tabs selectedIndex={ selectedIndex } onChange={ handleTabChange } dismissable onTabCloseRequest={ handleTabCloseRequested }>
      <TabList>
        {

          // add static tab to open new files
          elements.map((element, idx) => {
            const identifier = element.moddleElement.id;
            const displayName = element.moddleElement.name;
            return (

            // add dot on modified tabs
              <Tab key={ idx }>
                { displayName || identifier }
              </Tab>
            );
          })
        }
      </TabList>
      <TabPanels>
        {
          elements.map(({ element, moddleElement, language, value }, idx) => {
            const handleEditorChange = value => onChange({
              index: idx,
              value,
            });

            const EditorComponent = getEditor(language);
            return (
              <TabPanel key={ idx }>
                <EditorComponent width="100%" heiht="100%" element={ element } moddleElement={ moddleElement } value={ value } onChange={ handleEditorChange } />
              </TabPanel>
            );
          })
        }
      </TabPanels>
    </Tabs>
  );
};
