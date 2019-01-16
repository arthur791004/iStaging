import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NORMAL_THEMES } from '@/constants/themes';
import render from '@/utils/render';
import DevTools from '@/components/DevTools';
import GlobalStyle from '@/components/GlobalStyle';
import LazyHomePage from '@/pages/Home/Lazy';
import LazyNotFoundPage from '@/pages/NotFound/Lazy';
import LazyBuildingPage from '@/pages/Building/Lazy';

const App = () => (
  <ThemeProvider theme={NORMAL_THEMES}>
    <React.Suspense fallback="">
      <DevTools />
      <GlobalStyle />
      <Switch location={location}>
        <Route exact path="/" render={render(LazyHomePage)} />
        <Route path="/building" render={render(LazyBuildingPage)} />
        <Route exact path="/404" render={render(LazyNotFoundPage)} />
        <Redirect to="/404" />
      </Switch>
    </React.Suspense>
  </ThemeProvider>
);

export default App;
