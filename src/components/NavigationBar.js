import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

function NavigationBar(props) {
  const { classes } = props;
  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar variant="dense">
        <Typography className={classes.grow} variant="h6" color="primary">
          Opening Hands
        </Typography>
        <Button color="inherit" onClick={props.onClickDecks}>Decks</Button>
        <Button color="inherit" onClick={props.onClickSimulation}>simulation</Button>
      </Toolbar>
    </AppBar>
  );
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);
