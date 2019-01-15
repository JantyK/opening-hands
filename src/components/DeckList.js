import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';


import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'

const styles = () => ({
  mainContent: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
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
    <Grid container justify="center" item xs>
      <Card className={classes.addDeckCard}>
        <CardActionArea className={classes.cardActionArea} onClick={onNewDeckClicked}>
          <CardContent>
            <AddCircleIcon className={classes.addDeckCardIcon}/>
            <Typography className={classes.addDeckCardTitle} color="textSecondary" gutterBottom>
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
    <Grid container justify="center" item xs>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <CardActionArea className={classes.cardActionArea} onClick={() => {console.log('hi')}}>

            <Typography variant="h5">
              {`${gameName} Deck`}
            </Typography>
            <Typography variant="h5">
              {deckName}
            </Typography>
          </CardActionArea>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton onClick={onDeleteDeckClicked}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={onEditDeckClicked}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onViewDeckClicked}>
            <RemoveRedEyeIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

class DeckList extends Component {
  render() {
    const { classes, deckList, onNewDeckClicked, onDeleteDeckClicked } = this.props;

    return (
      <div className={classes.mainContent}>
        <Grid container justify="space-around" alignItems="center">
          <AddNewDeckButton classes={classes} onNewDeckClicked={onNewDeckClicked}/>
          { deckList.map((deck, index) => (
            <Deck
              key={index}
              deck={deck}
              classes={classes}
              onDeleteDeckClicked={() => onDeleteDeckClicked(index)}/>
            ))
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DeckList);
