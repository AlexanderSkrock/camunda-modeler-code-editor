import React from 'camunda-modeler-plugin-helpers/react';

import { Theme as CarbonTheme } from '../../vendor/@carbon/react';

const Theme = ({ children }) => (
  <CarbonTheme theme="white">
    { children }
  </CarbonTheme>
);

export default Theme;