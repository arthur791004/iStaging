import React from 'react';

import getDisplayName from '@/utils/getDisplayName';
import Visibility from './';

const withVisibility = Placeholder => (Component) => {
  const WithVisibility = props => (
    <Visibility>
      {({ visible, ref }) => (visible
        ? <Component {...props} />
        : <Placeholder {...props} ref={ref} />
      )}
    </Visibility>
  );

  WithVisibility.displayName = `WithVisibility(${getDisplayName(Component)})`;

  return WithVisibility;
};

export default withVisibility;
