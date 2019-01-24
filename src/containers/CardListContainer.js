import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import CardList from '../components/CardList';
import EmptyView from '../components/EmptyView';
import NewCardInput from '../components/NewCardInput';

import playingCards from '../images/playingCards.png';

const styles = () => ({
  mainContent: {
    minHeight: 'calc(100vh - 48px)',
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

class CardListContainer extends Component {

  state = {
    deckIndex: '',
    deckList: [],
    deck: [],
    cards: [],
  }

  componentDidMount = () => {
    const { state } = this.props.location;

    if(!state) {
      this.props.history.push('/decks')
      return;
    }

    const deckList = JSON.parse(localStorage.getItem('deckList'))
    const { deckIndex } = state;
    const deck = deckList[deckIndex];
    const { cards } = deck;
    this.setState({ deckIndex, deckList, deck, cards })
    onbeforeunload = () => this.onSaveDeckInLocalStorage();
  }

  componentWillUnmount = () => {
    this.onSaveDeckInLocalStorage();
    onbeforeunload = null;
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

  onSaveDeckInLocalStorage = () => {
    const { deckIndex, deckList, deck, cards } = this.state;
    deck.cards = cards;
    deckList[deckIndex] = deck;
    localStorage.setItem('deckList', JSON.stringify(deckList));
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
    const shouldShowCardList = this.state.cards.length > 0;

    return (
      <div className={classes.mainContent}>
        { shouldShowCardList ?
          <CardList
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

export default withStyles(styles)(CardListContainer);
