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
    }
  }),
);

interface Data {
  name: string;
  timestamp: number;
  starRating: number;
  availability: number;
}

export default function ReviewList(props: any): JSX.Element {
  console.log(props);
  const classes = useStyles();

  return (
    <section>
      <h2>Review Applicants Feed</h2>
      <div className={classes.listContainer}>
        <List className={classes.list}>
          <div>Top</div>
          {props.data.map((row: Data) => (
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
          <div>Bottom</div>
        </List>
      </div>
    </section>
  );
}

