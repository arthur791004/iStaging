import React from 'react';

import DevTools from '@/components/DevTools';
import Building from '@/containers/Building';

const App = () => (
  <React.Fragment>
    <DevTools />
    {/* TODO: get id from routers; */}
    <Building buildingID="483490" />
  </React.Fragment>
);

export default App;
