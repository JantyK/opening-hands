import React, { Component } from 'react';

import CardListContainer from './CardListContainer';

class DeckDetailsContainer extends Component {
  render() {
    const { location } = this.props;
    return (
      <CardListContainer location={location}/>
    )
  }
}

export default DeckDetailsContainer;
