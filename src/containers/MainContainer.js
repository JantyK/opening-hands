import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Routes from '../router/routes';

const styles = () => ({
  mainContainer: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
  },
});

class MainContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        {Routes}
      </div>
    );
  }
}

export default withStyles(styles)(MainContainer);
