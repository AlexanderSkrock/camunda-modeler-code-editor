import { Theme } from '@carbon/react';

import '@carbon/styles/css/styles.min.css';

export default function(Component, React) {
  return props => (
    <Theme theme="white">
      <Component { ...props } />
    </Theme>
  );
}
