import React from 'react';
import {
  Switch,
  RouteProps as ReactDOMRouteProps
} from 'react-router-dom';

import Route from './Route';

import Developers from '../pages/Developers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Developers} />
  </Switch>
);

export default Routes;
