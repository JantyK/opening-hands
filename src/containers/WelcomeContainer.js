import React, { Component } from 'react';
import Welcome from '../components/Welcome';

class WelcomeContainer extends Component {
  onGetStartedClicked = () => {
    this.props.history.push('/decks')
  }

  render() {
    return (
      <Welcome
        onGetStartedClicked={this.onGetStartedClicked}
      />
    );
  }
}

export default WelcomeContainer;
