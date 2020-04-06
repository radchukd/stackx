import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';

import { PrivateRoute } from './components';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute exact path="/profile" component={Profile} />
  </Switch>
);

export default AppRouter;
