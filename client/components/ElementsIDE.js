// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';

import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import { getEditableType } from '../../lib';

import {
  Button,
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@carbon/react';
import { Add } from '@carbon/icons-react';

import { ElementEditor, SearchModal } from './';
import { getType } from '../utils/elements';

const SearchResultContainer = ({ children }) => {
  return (
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>
            Element
          </StructuredListCell>
          <StructuredListCell head>
            Type
          </StructuredListCell>
          <StructuredListCell head>
            Language
          </StructuredListCell>
          <StructuredListCell head>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        { children }
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

const SearchResultItem = (onClick) => ({ item, disabled }) => (
  <StructuredListRow>
    <StructuredListCell>
      { getLabel(item.element) || item.element.id }
    </StructuredListCell>
    <StructuredListCell>
      { getType(item.moddleElement) }
    </StructuredListCell>
    <StructuredListCell>
      { getEditableType(getType(item.moddleElement)).accessors.getLanguage(item.moddleElement) }
    </StructuredListCell>
    <StructuredListCell>
      <Button renderIcon={ Add } hasIconOnly disabled={ disabled } onClick={ () => onClick(item) } />
    </StructuredListCell>
  </StructuredListRow>
);

export default ({ width, height, elements, onChange, onOpen, onClose, onSearch, commandStack }) => {
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
            itemRenderer={ SearchResultItem(handleOpen) }
            itemContainerRenderer={ SearchResultContainer } />
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
