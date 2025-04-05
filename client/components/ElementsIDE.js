// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';

import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@carbon/react';
import { Add } from '@carbon/icons-react';

import { ElementEditor, ElementSearchResultContainer, ElementSearchResultItem, SearchModal } from './';

export default ({ width, height, elements, onOpen, onClose, onSearch, commandStack }) => {
  const [ searchOpen, setSearchOpen ] = useState(false);

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
    onClose({ index });
  }, [ onClose ]);

  const handleOpen = useCallback(element => {
    onOpen(element);
    setSearchOpen(false);

    // TODO it would be cool if we could automatically select the tab of the newly openend element
  }, [ onOpen, setSearchOpen ]);

  return (
    <div style={ { width, height, display: 'flex', flexDirection: 'column' } }>
      <Tabs selectedIndex={ selectedIndex } onChange={ handleTabChange } dismissable onTabCloseRequest={ handleTabCloseRequested }>
        <TabList>
          {
            elements.map((element, idx) => {
              const elementName = getLabel(element.element) || element.element.id;

              // TODO add dot on modified tabs
              return <Tab key={ idx }>{ elementName }</Tab>;
            })
          }
          <Button renderIcon={ Add } iconDescription="Open" hasIconOnly onClick={ () => setSearchOpen(true) } />
          <SearchModal
            title="Open"
            open={ searchOpen }
            onClose={ () => setSearchOpen(false) }
            onSearch={ onSearch }
            onSelect={ handleOpen }
            ItemRenderer={ ElementSearchResultItem }
            ItemContainerRenderer={ ElementSearchResultContainer } />
        </TabList>
        <TabPanels>
          {
            elements.map(({ element, moddleElement }, idx) => {
              return (
                <TabPanel key={ idx } style={ { flexGrow: 1 } }>
                  <ElementEditor
                    element={ element }
                    moddleElement={ moddleElement }
                    commandStack={ commandStack }
                  />
                </TabPanel>
              );
            })
          }
        </TabPanels>
      </Tabs>
    </div>
  );
};
