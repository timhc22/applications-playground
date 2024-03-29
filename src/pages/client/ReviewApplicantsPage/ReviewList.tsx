import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { DataInterface as Data } from '../../../interfaces/DataInterface';
import sortingAlgorithm from '../../../utilities/sortingAlgorithm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    list: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    card: {
      width: 200,
      marginBottom: 15,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      backgroundColor: '#eee',
    },
    position: {
      marginBottom: 5,
      color: 'green'
    },
    warning: {
      backgroundColor: 'red',
      padding: 5,
      color: 'white',
      maxWidth: 400,
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }),
);

export default function ReviewList(props: any): JSX.Element {
  const classes = useStyles();
  const sortedData = sortingAlgorithm(props.data);

  return (
    <section>
      <h2>Review Applicants</h2>
      <p className={classes.warning}>Algorithm is currently ONLY sorting by time applicant applied!</p>
      <p>Hello Holly from The Hirer, your Job posting has new Applications!</p>
      <div className={classes.listContainer}>
        <List className={classes.list}>
          <div className={classes.position}>Top</div>
          {sortedData.map((row: Data) => (
            <Card key={row.name} className={classes.card} variant="outlined">
              <CardContent>
                <ListItemAvatar>
                  <Avatar alt={row.name} />
                </ListItemAvatar>
                <ListItemText primary={row.name}/>
                <CardActions className={classes.buttonContainer}>
                  <Button className={classes.button} size="small">
                    Accept</Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
          <div className={classes.position}>Bottom</div>
        </List>
      </div>
    </section>
  );
}

