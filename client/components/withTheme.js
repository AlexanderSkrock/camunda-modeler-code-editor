import { Theme } from '../../vendor/@carbon/react';

export default function(Component, React) {
  return props => (
    <Theme theme="white">
      <Component { ...props } />
    </Theme>
  );
}
