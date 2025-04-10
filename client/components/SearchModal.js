import React, { useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';

import { ModalHeader, PaginationNav, Search } from '../../vendor/@carbon/react';
import { useDebounce } from 'use-debounce';

import { Modal, ModalBody } from './';
import { selectId } from '../utils/css';

const DefaultContainer = ({ children }) => <div>{ children }</div>;

const SearchModal = ({ open, title, onClose, onSearch, onSelect, pageSize = 10, ItemRenderer, ItemContainerRenderer = DefaultContainer }) => {
  const [ searchFieldId ] = useState(`search-input-${Math.floor(Math.random() * 1000)}`);

  const [ currentSearchValue, setCurrentSearchValue ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);

  const [ debouncedSearchValue ] = useDebounce(currentSearchValue, 1000);

  const numberOfPages = useMemo(() => Math.ceil(searchResults.length / pageSize), [ searchResults, pageSize ]);
  const currentResultPage = useMemo(() => {
    const pageStart = currentPage * pageSize;
    return searchResults.slice(pageStart, pageStart + pageSize);
  }, [ searchResults, currentPage, pageSize ]);

  useEffect(() => {
    setCurrentPage(0);
  }, [ searchResults ]);

  useEffect(() => {
    onSearch(debouncedSearchValue).then(result => setSearchResults(result || []));
  }, [ debouncedSearchValue, onSearch ]);

  useEffect(() => {
    setCurrentSearchValue('');
  }, [ open ]);

  const handleKeyDown = useCallback(evt => {
    if (evt.key === 'Escape' && !currentSearchValue) {
      onClose();
    }
  }, [ currentSearchValue, onClose ]);

  const handleSearchValuedChange = useCallback(evt => setCurrentSearchValue(evt.target.value), [ setCurrentSearchValue ]);
  const handleClearSearch = useCallback(() => setCurrentSearchValue(''), [ setCurrentSearchValue ]);

  return (
    <Modal open={ open } onClose={ onClose } selectorPrimaryFocus={ selectId(searchFieldId) }>
      <ModalHeader>
        { title }
      </ModalHeader>
      <ModalBody>
        <Search id={ searchFieldId } labelText="Search" value={ currentSearchValue } onKeyDown={ handleKeyDown } onChange={ handleSearchValuedChange } onClear={ handleClearSearch } />
        <ItemContainerRenderer>
          {
            currentResultPage.map((item, idx) => <ItemRenderer key={ idx } { ...item } onSelect={ () => onSelect(item.item) } />)
          }
        </ItemContainerRenderer>
        <PaginationNav page={ currentPage } totalItems={ numberOfPages } onChange={ setCurrentPage } />
      </ModalBody>
    </Modal>
  );
};

export default SearchModal;