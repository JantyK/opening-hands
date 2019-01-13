import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Button, Typography } from '@material-ui/core';


import logo from '../images/logo.png';

const styles = () => ({
  mainContent: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vh)',
    color: 'white',
    textAlign: 'center',
  },
  logo: {
    height: '25vh',
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

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContent}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Typography color="primary" variant="h6" className={classes.text}>
          Opening Hand is a probability calculator for your favorite card games.
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Let's Get Started
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
