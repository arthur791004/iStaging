import React from 'react';
import { ThemeProvider } from 'styled-components';

import { NORMAL_THEMES } from '@/constants/themes';
import DevTools from '@/components/DevTools';
import GlobalStyle from '@/components/GlobalStyle';
import Building from '@/containers/Building';

const App = () => (
  <ThemeProvider theme={NORMAL_THEMES}>
    <React.Fragment>
      <DevTools />
      <GlobalStyle />
      {/* TODO: get id from routers; */}
      <Building buildingID="483490" />
    </React.Fragment>
  </ThemeProvider>
);

export default App;
