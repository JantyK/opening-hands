import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const styles = () => ({
  mainContent: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logo: {
    height: '25vh',
    marginTop: 32,
  },
  button: {
    marginTop: 16,
  },
  text: {
    marginTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
  }
});

class Welcome extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainContent}>
        <Typography color='primary' variant='h3' className={classes.text}>
          Simulation stuff goes here.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Welcome);
