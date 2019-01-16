import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core'

import {
  AddCircle,
  Delete,
  Edit,
  RemoveRedEye,
} from '@material-ui/icons';

const styles = () => ({
  mainContent: {
    width: '100%',
    overflow: 'auto',
  },
  card: {
    maxWidth: 250,
    minWidth: 250,
    maxHeight: 125,
    textAlign: 'center',
    marginTop: 16,
  },
  cardContent: {
    padding: 8,
  },
  cardActions: {
    padding: 0,
    justifyContent: 'center',
  },
  cardActionArea: {
    height: '100%',
  },
  title: {
    fontSize: 'calc(8px + 2vh)',
  },
  addDeckCard: {
    backgroundColor: 'transparent',
    maxWidth: 250,
    minWidth: 250,
    height: 125,
    textAlign: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 16,
  },
  addDeckCardTitle: {
    fontSize: 'calc(10px + 2vh)',
    color: 'white',
  },
  addDeckCardIcon: {
    fontSize: 32,
  },
});

function AddNewDeckButton(props) {
  const { classes, onNewDeckClicked } = props;

  return (
    <Grid container justify='center' item xs>
      <Card className={classes.addDeckCard}>
        <CardActionArea className={classes.cardActionArea} onClick={onNewDeckClicked}>
          <CardContent>
            <AddCircle color="primary" className={classes.addDeckCardIcon}/>
            <Typography className={classes.addDeckCardTitle} color='textSecondary' gutterBottom>
              New Deck
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

function Deck(props) {
  const { classes, deck, onDeleteDeckClicked, onEditDeckClicked, onViewDeckClicked } = props;
  const { gameName, deckName } = deck;

  return (
    <Grid container justify='center' item xs>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <CardActionArea className={classes.cardActionArea} onClick={onViewDeckClicked}>
            <Typography variant='h5'>
              {`${gameName} Deck`}
            </Typography>
            <Typography variant='h5'>
              {deckName}
            </Typography>
          </CardActionArea>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton onClick={onDeleteDeckClicked}>
            <Delete />
          </IconButton>
          <IconButton onClick={onEditDeckClicked}>
            <Edit />
          </IconButton>
          <IconButton onClick={onViewDeckClicked}>
            <RemoveRedEye />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

class DeckList extends Component {
  render() {
    const { classes, deckList, onNewDeckClicked, onDeleteDeckClicked, onViewDeckClicked } = this.props;

    return (
      <div className={classes.mainContent}>
        <Grid container justify='space-around' alignItems='center'>
          <AddNewDeckButton classes={classes} onNewDeckClicked={onNewDeckClicked}/>
          { deckList.map((deck, index) => (
            <Deck
              key={index}
              deck={deck}
              classes={classes}
              onDeleteDeckClicked={() => onDeleteDeckClicked(index)}
              onViewDeckClicked={() => onViewDeckClicked(index)}
            />
            ))
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DeckList);
