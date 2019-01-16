import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';

const styles = () => ({
  text: {
    text: {
      marginTop: 32,
    }
  }
});

class EmptyView extends React.Component {
  hideDivider = () => {
    if (this.props.hideDivider) {
      return null;
    }
    return <Divider light='true' style={{ marginTop: 16, marginBottom: 16 }} />;
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container column='true' justify='center' alignItems='center'>
        <Grid item xs={8} md={6} style={{ textAlign: 'center' }}>
          {this.props.icon}
          <Typography color='primary' variant='h5' className={classes.text}>
            {this.props.topMessage}
          </Typography>
          {this.hideDivider()}
          <Typography color='primary' variant='h5' className={classes.text}>
            {this.props.bottomMessage}
          </Typography>
          {this.props.component}
        </Grid>
      </Grid>
    );
  }
}

EmptyView.propTypes = {
  icon: PropTypes.element,
  topMessage: PropTypes.string,
  bottomMessage: PropTypes.string,
  component: PropTypes.component,
  hideDivider: PropTypes.bool,
};

export default withStyles(styles)(EmptyView);
