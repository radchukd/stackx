import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components';
import {
  Home,
  Login,
  Signup,
  Profile,
  NotFound,
} from './pages';

const AppRouter: FC<{}> = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute exact path="/profile" component={Profile} />
    <Route component={NotFound} />
  </Switch>
);

export default AppRouter;
