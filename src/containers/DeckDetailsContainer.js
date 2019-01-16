import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import DeckDetails from '../components/DeckDetails';
import EmptyView from '../components/EmptyView';
import NewCardInput from '../components/NewCardInput';

import playingCards from '../images/playingCards.png';

const styles = () => ({
  mainContent: {
    minHeight: '100vh',
    maxWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  playingCardsIcon: {
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

class DeckDetailsContainer extends Component {

  state = {
    deck: [],
    cards: [],
  }

  componentDidMount = () => {
    const { deck } = this.props.location.state;
    let { cards } = deck;

    this.setState({ deck, cards })
  }

  onClickDeleteCard = (cardIndex) => {
    const cards = this.state.cards;
    cards.splice(cardIndex, 1);
    this.setState({ cards })
  }

  onClickAddCard = (cardName, cardQuantity) => {
    const cards = this.state.cards;
    const card = { name: cardName, quantity: cardQuantity };
    cards.push(card);
    this.setState({ cards });
  }

  renderEmptyView = () => {
    const { classes } = this.props;
    const { deck } = this.state;
    const { deckName } = deck;
    let emptyViewTopMessage = `To get started, add a card to your ${deckName} deck`;

    return (
      <EmptyView
        icon={<img src={playingCards} className={classes.playingCardsIcon} alt='playingCards' />}
        topMessage={emptyViewTopMessage}
        bottomMessage={null}
        component={<NewCardInput onClickAddCard={this.onClickAddCard} />}
        hideDivider
      />
    )
  }

  render() {
    const { classes } = this.props;
    const shouldShowDeckDetails = this.state.cards.length > 0;

    return (
      <div className={classes.mainContent}>
        { shouldShowDeckDetails ?
          <DeckDetails
            deck={this.state.deck}
            cards={this.state.cards}
            onClickDeleteCard={this.onClickDeleteCard}
            onClickAddCard={this.onClickAddCard}
          />
        :
          this.renderEmptyView()
        }
      </div>
    );
  }
}

export default withStyles(styles)(DeckDetailsContainer);
