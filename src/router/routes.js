import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PublicRoute from './publicRoute';
import HomeContainer from '../containers/HomeContainer';

const routes = (
  <Switch>
    <Route exact path='/' render={() => (
      <Redirect to="/home" />
    )}/>

    <PublicRoute path='/home' component={HomeContainer} />

    <Route path='/*' component={() => (<Redirect to='/'/>) } />
  </Switch>
);

export default routes;
