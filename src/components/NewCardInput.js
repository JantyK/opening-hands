import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  Button,
  Grid,
  TextField
} from '@material-ui/core';

const styles = () => ({
  input: {
    color: 'white',
  },
  addButton: {
    marginTop: 8,
  },
  notchedOutline: {
    borderColor: 'white !important',
  }
});

class NewCardInput extends Component {

  state = {
    cardName: '',
    cardQuantity: '',
    showCardNameError: false,
    showCardQuantityError: false,
  }

  onChangeTextField = name => event => {
    this.setState({ [name]: event.target.value });
  }

  onClickAddCard = () => {
    const { cardName, cardQuantity } = this.state;
    const { onClickAddCard } = this.props;

    const showCardNameError = cardName.length === 0
    const showCardQuantityError = cardQuantity.length === 0;

    this.setState({ showCardNameError, showCardQuantityError })

    if(showCardNameError || showCardQuantityError) return;

    onClickAddCard(cardName, parseInt(cardQuantity));
    this.setState({ cardName: '', cardQuantity: '' })
  }

  render() {
    const { classes } = this.props;
    const { cardName, cardQuantity, showCardNameError, showCardQuantityError } = this.state;

    return (
      <Grid container justify='space-between' alignItems='center'>
        <Grid item xs={7} md={6}>
          <TextField
            required
            autoFocus
            fullWidth
            margin='dense'
            id='cardName'
            label='Card Name'
            type='text'
            variant='outlined'
            InputProps={{
              classes: {
                root: classes.input,
                notchedOutline: showCardNameError ? null : classes.notchedOutline,
              },
              autoComplete: 'off',
            }}
            InputLabelProps={{
              className: classes.input
            }}
            onChange={this.onChangeTextField('cardName')}
            value={cardName}
            error={showCardNameError}
          />
        </Grid>
        <Grid item xs={4} md={3}>
          <TextField
            required
            fullWidth
            margin='dense'
            id='cardQuantity'
            label='Quantity'
            type='number'
            variant='outlined'
            InputProps={{
              classes: {
                root: classes.input,
                notchedOutline: showCardQuantityError ? null : classes.notchedOutline,
              },
              autoComplete: 'off',
            }}
            InputLabelProps={{
              className: classes.input
            }}
            onChange={this.onChangeTextField('cardQuantity')}
            value={cardQuantity}
            error={showCardQuantityError}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.addButton}
            onClick={this.onClickAddCard}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NewCardInput);
