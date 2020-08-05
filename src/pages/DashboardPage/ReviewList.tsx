import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
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
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    card: {
      minWidth: 275,
      marginBottom: 15,
    },
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
      <h2>Review Applicants Feed:</h2>
      <p>What the Client will see re Candidates who have applied</p>
      <div className={classes.listContainer}>
        <List className={classes.list}>
          {props.data.map((row: Data) => (
            <Card key={row.name} className={classes.card} variant="outlined">
              <CardContent>
                <ListItemAvatar>
                  <Avatar alt={row.name} src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText primary={row.name}/>
              </CardContent>
            </Card>
          ))}
        </List>
      </div>
    </section>
  );
}


{/*<Table className={classes.table} aria-label="simple table">*/}
{/*  <TableHead>*/}
{/*    <TableRow>*/}
{/*      <TableCell>Name</TableCell>*/}
{/*      <TableCell>Time ('Applied' at)</TableCell>*/}
{/*      <TableCell>Star Rating</TableCell>*/}
{/*      <TableCell>Availability</TableCell>*/}
{/*    </TableRow>*/}
{/*  </TableHead>*/}
{/*  <TableBody>*/}
{/*    {data.map((row) => (*/}
{/*      <TableRow key={row.name}>*/}
{/*        <TableCell component="th" scope="row">*/}
{/*          {row.name}*/}
{/*        </TableCell>*/}
{/*        <TableCell>{row.timestamp}:00 Hours</TableCell>*/}
{/*        <TableCell>{row.starRating}/5</TableCell>*/}
{/*        <TableCell>{row.availability}/10 Shifts</TableCell>*/}
{/*      </TableRow>*/}
{/*    ))}*/}
{/*  </TableBody>*/}
{/*</Table>*/}
