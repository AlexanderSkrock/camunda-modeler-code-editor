// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';

import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import { getEditableType, getScopeProvider } from '../../lib';

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

export default ({ elements, onChange, onOpen, onClose, onSearch, getScope }) => {
  const [ searchOpen, setSearchOpen ] = useState(false);

  const [ selectedIndex, selectIndex ] = useState(0);
  useEffect(() => {
    if (selectedIndex < 0 || selectIndex >= elements.length) {
      selectIndex(0);
    }
  }, [ elements, selectIndex ]);

  const [ elementScope, setElementScope ] = useState({});
  useEffect(() => {
    const currentElement = elements[selectedIndex];
    if (!currentElement) {
      return setElementScope({});
    }
    const scopeProvider = getScopeProvider();
    scopeProvider(currentElement.element).then(setElementScope);
  }, [ elements, selectedIndex, getScope ]);

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
            elements.map(({ element, moddleElement, language, value }, idx) => {
              const handleEditorChange = value => onChange({
                index: idx,
                value,
              });

              const EditorComponent = getEditor(language);
              return (
                <TabPanel key={ idx }>
                  <EditorComponent
                    width="100%"
                    heiht="100%"
                    element={ element }
                    moddleElement={ moddleElement }
                    language={ language }
                    value={ value }
                    onChange={ handleEditorChange }
                    scope={ elementScope } />
                </TabPanel>
              );
            })
          }
        </TabPanels>
      </Tabs>

    </>
  );
};
