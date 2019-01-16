import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import NewCardInput from './NewCardInput';

const styles = () => ({
  mainContent: {
    minHeight: '100vh',
  },
  text: {
    marginTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 12,
  },
  table: {
    width: '100%',
  },
  inputContainer: {
    padding: 12,
  }
});

function CardTable(props) {
  const { classes, cards, onClickDeleteCard } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='center'>Quantity</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map((card, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {card.name}
              </TableCell>
              <TableCell align='center'>{card.quantity}</TableCell>
              <TableCell align='center'>
                <IconButton onClick={() => onClickDeleteCard(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

class DeckDetails extends Component {

  state = {
    cardName: '',
    cardQuantity: '',
  }

  getCardCount = (cards) => {
    let cardCount = 0;
    cards.forEach(card => cardCount += card.quantity)
    return cardCount;
  }

  render() {
    const { classes, deck, cards, onClickDeleteCard, onClickAddCard } = this.props;
    const { deckName } = deck;

    return (
      <div className={classes.mainContent}>
        <Typography color='primary' variant='h3' className={classes.text}>
          {deckName}
        </Typography>
        <Typography color='primary' variant='h5' className={classes.text}>
          {`Card Count: ${this.getCardCount(cards)}`}
        </Typography>
        <Grid container justify='space-between' alignItems='center' className={classes.inputContainer}>
          <NewCardInput onClickAddCard={onClickAddCard}/>
          <Grid item xs={12}>
            <CardTable
              classes={classes}
              cards={cards}
              onClickDeleteCard={onClickDeleteCard}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DeckDetails);
