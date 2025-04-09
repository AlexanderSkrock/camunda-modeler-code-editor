// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useRef, useState } from 'camunda-modeler-plugin-helpers/react';

import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '../../vendor/@carbon/react';
import { Add } from '../../vendor/@carbon/icons-react';

import { getEditableType } from '../../lib';

import { ElementEditor, ElementSearchResultContainer, ElementSearchResultItem, SearchModal } from './';

import * as styles from './ElementsIDE.module.scss';

export default ({ width, height, elements, onOpen, onClose, onSearch, commandStack }) => {
  const [ searchOpen, setSearchOpen ] = useState(false);

  const [ selectedIndex, selectIndex ] = useState(0);
  useEffect(() => {
    if (selectedIndex < 0 || selectIndex >= elements.length) {
      selectIndex(0);
    }
  }, [ elements, selectIndex ]);

  const containerRef = useRef();
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--code-editor-ide-width', width);
      containerRef.current.style.setProperty('--code-editor-ide-height', height);
    }
  }, [ width, height, containerRef.current ]);

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
    <div ref={ containerRef } className={ styles.ide }>
      <Tabs selectedIndex={ selectedIndex } onChange={ handleTabChange } dismissable onTabCloseRequest={ handleTabCloseRequested }>
        <TabList>
          {
            elements.map(({ element, type }, idx) => {
              const elementName = getLabel(element) || element.id;
              const typeName = getEditableType(type).name;
              const tabName = `${elementName} (${typeName})`;

              // TODO add dot on modified tabs
              return <Tab key={ idx }>{ tabName }</Tab>;
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
            elements.map(({ element, moddleElement, type }, idx) => {
              return (
                <TabPanel key={ idx } className={ styles.editor }>
                  <ElementEditor
                    key={ idx }
                    element={ element }
                    moddleElement={ moddleElement }
                    type={ type }
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
