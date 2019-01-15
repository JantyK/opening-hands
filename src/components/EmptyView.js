import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
    return <Divider light="true" style={{ marginTop: 16, marginBottom: 16 }} />;
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container column="true" justify="center" alignItems="center">
        <Grid item xs={8} style={{ textAlign: 'center' }}>
          {this.props.icon}
          <Typography color="primary" variant="h5" className={classes.text}>
            {this.props.topMessage}
          </Typography>
          {this.hideDivider()}
          <Typography color="primary" variant="h5" className={classes.text}>
            {this.props.bottomMessage}
          </Typography>
          {this.props.button}
        </Grid>
      </Grid>
    );
  }
}

EmptyView.propTypes = {
  icon: PropTypes.element,
  topMessage: PropTypes.string,
  bottomMessage: PropTypes.string,
  button: PropTypes.element,
  hideDivider: PropTypes.bool,
};

export default withStyles(styles)(EmptyView);
