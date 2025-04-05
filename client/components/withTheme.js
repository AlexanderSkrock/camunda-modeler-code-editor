import { Theme } from '@carbon/react';

import '@carbon/react/scss/components/button/_index.scss';
import '@carbon/react/scss/components/modal/_index.scss';
import '@carbon/react/scss/components/pagination-nav/_index.scss';
import '@carbon/react/scss/components/search/_index.scss';
import '@carbon/react/scss/components/structured-list/_index.scss';
import '@carbon/react/scss/components/tabs/_index.scss';

export default function(Component, React) {
  return props => (
    <Theme theme="white">
      <Component { ...props } />
    </Theme>
  );
}
