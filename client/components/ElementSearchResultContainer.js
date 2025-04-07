// eslint-disable-next-line no-unused-vars
import React from 'camunda-modeler-plugin-helpers/react';

import { StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow, StructuredListWrapper } from '../../vendor/@carbon/react';

export default ({ children }) => (
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
