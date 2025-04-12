import React from 'camunda-modeler-plugin-helpers/react';

import { StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow, StructuredListWrapper } from '../../vendor/@carbon/react';

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