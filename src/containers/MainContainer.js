import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import NavigationBar from '../components/NavigationBar';
import Routes from '../router/routes';

const styles = () => ({
  mainContainer: {
    backgroundColor: '#282c34',
    minHeight: 'calc(100vh - 48px)',
  },
});

class MainContainer extends Component {

  onClickDecks = () => {
    this.props.history.push('/decks')

  }

  onClickSimulation = () => {
    this.props.history.push('/simulation')
  }

  render() {
    const { classes, location } = this.props;
    return (
      <div>
        {location.pathname !== '/welcome' && <NavigationBar onClickDecks={this.onClickDecks} onClickSimulation={this.onClickSimulation}/>}
        <div className={classes.mainContainer}>
          {Routes}
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MainContainer));
