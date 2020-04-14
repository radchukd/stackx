import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  NotFound,
} from './pages';

const AppRouter: FC<{}> = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default AppRouter;
