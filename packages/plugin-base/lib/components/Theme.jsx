import React from 'react';

import { Theme as CarbonTheme } from '@carbon/react';

const Theme = ({ children }) => (
  <CarbonTheme theme="white">
    { children }
  </CarbonTheme>
);

export default Theme;