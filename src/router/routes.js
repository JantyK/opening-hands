import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PublicRoute from './publicRoute';
import WelcomeContainer from '../containers/WelcomeContainer';
import DeckListContainer from '../containers/DeckListContainer';
import DeckDetailsContainer from '../containers/DeckDetailsContainer';
import SimulationContainer from '../containers/SimulationContainer';

const deckList = JSON.parse(localStorage.getItem('deckList'))

const routes = (
  <Switch>
    <Route exact path='/' render={() => (
      deckList ?
        <Redirect to='/decks' />
      :
        <Redirect to='/welcome' />
    )}/>

    <PublicRoute path='/welcome' component={WelcomeContainer} />
    <PublicRoute path='/decks' component={DeckListContainer} />
    <PublicRoute path='/deck-details' component={DeckDetailsContainer} />
    <PublicRoute path='/simulation' component={SimulationContainer} />

    <Route path='/*' component={() => (<Redirect to='/'/>) } />
  </Switch>
);

export default routes;
