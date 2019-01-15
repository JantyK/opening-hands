import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class NewDeckDialog extends Component {

  state = {
    gameName: 'YuGiOh',
    deckName: 'Yang Zing OTK',
  }

  onChangeTextField = name => event => {
    this.setState({ [name]: event.target.value });
  }

  onCreateDeckClicked = () => {
    const { gameName, deckName } = this.state;
    const deck = { gameName, deckName };
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
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Deck</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the information below to create your new deck :)
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="game"
            label="Game"
            type="text"
            fullWidth
            placeholder="What's the name of the game your deck belongs to?"
            required
            value={gameName}
            onChange={this.onChangeTextField('gameName')}
          />
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            placeholder="Name your deck!"
            required
            value={deckName}
            onChange={this.onChangeTextField('deckName')}
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
