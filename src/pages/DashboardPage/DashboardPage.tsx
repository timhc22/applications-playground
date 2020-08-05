import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      marginTop: '50px',
    },
    list: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    table: {
      minWidth: 650,
    },
  }),
);

export default function DashboardPage(): JSX.Element {
  const classes = useStyles();

  interface Data {
    name: string;
    timestamp: number;
    starRating: number;
    availability: number;
  }

  const data: Data[] = [
    { name: 'Candidate A', timestamp: new Date().getHours(), starRating: 5, availability: 10},
    { name: 'Candidate B', timestamp: new Date().getHours() +1, starRating: 5, availability: 10},
  ]

  return (
    <section className="container">
      <h1>Review Applicants</h1>
      <p>A simulation of a Client looking at a generated list of Candidates after Client has posted a job and selected
        Manual Process</p>

      <Divider />

      <h2>Candidate Data</h2>
      <p>To be used behind the scenes by the sorting algorithm</p>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Time ('Applied' at)</TableCell>
              <TableCell>Star Rating</TableCell>
              <TableCell>Availability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.timestamp}:00 Hours</TableCell>
                <TableCell>{row.starRating}/5</TableCell>
                <TableCell>{row.availability}/10 Shifts</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <div className={classes.listContainer}>
        <List className={classes.list}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>

    </section>
  );
}
