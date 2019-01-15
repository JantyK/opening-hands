import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import EmptyView from '../components/EmptyView';
import NewDeckDialog from '../components/NewDeckDialog';
import DeckList from '../components/DeckList';

import emptyBox from '../images/emptyBox.png';

const styles = () => ({
  mainContent: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vh)',
    color: 'white',
  },
  emptyBoxIcon: {
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

class DeckListContainer extends Component {

  state = {
    showNewDeckDialog: false,
    deckList: [],
  }

  openNewDeckDialog = () => {
    this.setState({ showNewDeckDialog: true });
  };

  closeNewDeckDialog = () => {
    this.setState({ showNewDeckDialog: false });
  };


  onNewDeckClicked = () => {
    this.openNewDeckDialog();
  }

  onCreateDeckClicked = (deck) => {
    const deckList = this.state.deckList;
    deckList.push(deck);
    this.setState({ deckList });
  };

  onDeleteDeckClicked = (deckIndex) => {
    const deckList = this.state.deckList;
    deckList.splice(deckIndex, 1);
    this.setState({ deckList })
  }

  onEditDeckClicked = () => {
    // Edit deck name and game
  }

  onViewDeckClicked = () => {
    // View deck details and add cards
  }

  renderEmptyView = () => {
    let emptyViewTopMessage = "Looks like you don't have any decks yet.";
    const { classes } = this.props;

    return (
      <EmptyView
        icon={<img src={emptyBox} className={classes.emptyBoxIcon} alt="emptyBox" />}
        topMessage={emptyViewTopMessage}
        bottomMessage={null}
        hideDivider
        button={
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.onNewDeckClicked}
          >
            New Deck
          </Button>
        }
      />
    )
  }

  render() {
    const { classes } = this.props;
    const shouldShowDeckList = this.state.deckList.length > 0;

    return (
      <div className={classes.mainContent}>
        <NewDeckDialog
          open={this.state.showNewDeckDialog}
          openNewDeckDialog={this.openNewDeckDialog}
          closeNewDeckDialog={this.closeNewDeckDialog}
          onCreateDeckClicked={this.onCreateDeckClicked}
        />
        { shouldShowDeckList ?
          <DeckList
            deckList={this.state.deckList}
            onNewDeckClicked={this.onNewDeckClicked}
            onDeleteDeckClicked={this.onDeleteDeckClicked}
            onEditDeckClicked={this.onEditDeckClicked}
            onViewDeckClicked={this.onViewDeckClicked}
          />
          :
          this.renderEmptyView()
        }
      </div>
    );
  }
}

export default withStyles(styles)(DeckListContainer);
