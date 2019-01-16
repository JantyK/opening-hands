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
          Opening Hand
        </Typography>
        <img src={logo} className={classes.logo} alt='logo' />
        <Typography color='primary' variant='h5' className={classes.text}>
          A probability calculator for your favorite card games
        </Typography>
        <Button variant='contained' color='primary' className={classes.button} onClick={this.props.onGetStartedClicked}>
          Let's Get Started
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Welcome);
