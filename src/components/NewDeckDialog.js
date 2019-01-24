import React, { Component } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

class NewDeckDialog extends Component {

  state = {
    gameName: '',
    deckName: '',
  }

  onChangeTextField = name => event => {
    this.setState({ [name]: event.target.value });
  }

  onCreateDeckClicked = () => {
    const { gameName, deckName } = this.state;
    const deck = { gameName, deckName, cards: [], idealOpeningHands: [] };
    this.props.onCreateDeckClicked(deck);
    this.setState({ gameName: '', deckName: '' });
    this.props.closeNewDeckDialog();
  }

  render() {
    const { gameName, deckName } = this.state;
    const { closeNewDeckDialog, open } = this.props;

    let disableCreateButton = gameName.length === 0 || deckName.length === 0;

    return (
      <Dialog
        open={open}
        onClose={closeNewDeckDialog}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>New Deck</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the information below to create your new deck :)
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='game'
            label='Game'
            type='text'
            fullWidth
            placeholder='What card game?'
            required
            value={gameName}
            onChange={this.onChangeTextField('gameName')}
            inputProps={{
              autoComplete: 'off',
            }}
          />
          <TextField
            margin='dense'
            id='name'
            label='Name'
            type='text'
            fullWidth
            placeholder='Name your deck!'
            required
            value={deckName}
            onChange={this.onChangeTextField('deckName')}
            inputProps={{
              autoComplete: 'off',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeNewDeckDialog}>
            Cancel
          </Button>
          <Button
            disabled={disableCreateButton}
            onClick={this.onCreateDeckClicked}
          >
            Create Deck
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default NewDeckDialog;
