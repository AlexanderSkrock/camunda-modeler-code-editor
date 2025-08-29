import React from 'react';

import { StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow, StructuredListWrapper } from '@carbon/react';

const ElementSearchResultItemContainer = ({ children }) => (
  <StructuredListWrapper>
    <StructuredListHead>
      <StructuredListRow head>
        <StructuredListCell head>Element</StructuredListCell>
        <StructuredListCell head>Type</StructuredListCell>
        <StructuredListCell head>Language</StructuredListCell>
        <StructuredListCell head></StructuredListCell>
      </StructuredListRow>
    </StructuredListHead>
    <StructuredListBody>
      { children }
    </StructuredListBody>
  </StructuredListWrapper>
);

export default ElementSearchResultItemContainer;