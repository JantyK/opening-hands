import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PublicRoute from './publicRoute';
import WelcomeContainer from '../containers/WelcomeContainer';
import DeckListContainer from '../containers/DeckListContainer';
import DeckDetailsContainer from '../containers/DeckDetailsContainer';

const routes = (
  <Switch>
    <Route exact path='/' render={() => (
      <Redirect to='/welcome' />
    )}/>

    <PublicRoute path='/welcome' component={WelcomeContainer} />
    <PublicRoute path='/decks' component={DeckListContainer} />
    <PublicRoute path='/deck-details' component={DeckDetailsContainer} />
    <PublicRoute path='/simulate' component={WelcomeContainer} />

    <Route path='/*' component={() => (<Redirect to='/'/>) } />
  </Switch>
);

export default routes;
