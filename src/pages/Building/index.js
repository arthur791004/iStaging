import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import render from '@/utils/render';
import LazyBuilding from '@/containers/Building/Lazy';

const Building = () => (
  <Switch>
    <Route exact path="/building/:buildingID" render={render(LazyBuilding)} />
    <Redirect to="/404" />
  </Switch>
);

export default Building;
