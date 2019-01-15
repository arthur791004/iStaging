import React from 'react';

import DevTools from '@/components/DevTools';
import GlobalStyle from '@/components/GlobalStyle';
import Building from '@/containers/Building';

const App = () => (
  <React.Fragment>
    <DevTools />
    <GlobalStyle />
    {/* TODO: get id from routers; */}
    <Building buildingID="483490" />
  </React.Fragment>
);

export default App;
