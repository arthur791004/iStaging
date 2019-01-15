import React from 'react';
import MobXDevTools from 'mobx-react-devtools'; // eslint-disable-line import/no-extraneous-dependencies

import { isProd } from '@/constants';

const DevTools = () => {
  if (isProd) {
    return null;
  }

  return <MobXDevTools />;
};

export default DevTools;
