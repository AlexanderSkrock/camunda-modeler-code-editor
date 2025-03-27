// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';

import {
  Button,
  StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow,
  StructuredListWrapper,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@carbon/react';
import { Add } from '@carbon/icons-react';

import { getEditor } from '../../lib';

import { SearchModal } from './';

const SearchResultContainer = ({ children }) => {
  return (
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>
            Element
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
      { item.moddleElement.name || item.moddleElement.id }
    </StructuredListCell>
    <StructuredListCell>
      <Button renderIcon={ Add } hasIconOnly disabled={ disabled } onClick={ () => onClick(item) } />
    </StructuredListCell>
  </StructuredListRow>
);

export default ({ elements, onChange, onOpen, onClose, onSearch }) => {
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
    <>
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
            elements.map(({ element, moddleElement, language, value }, idx) => {
              const handleEditorChange = value => onChange({
                index: idx,
                value,
              });

              const EditorComponent = getEditor(language);
              return (
                <TabPanel key={ idx }>
                  <EditorComponent width="100%" heiht="100%" element={ element } moddleElement={ moddleElement } language={ language } value={ value } onChange={ handleEditorChange } />
                </TabPanel>
              );
            })
          }
        </TabPanels>
      </Tabs>

    </>
  );
};
