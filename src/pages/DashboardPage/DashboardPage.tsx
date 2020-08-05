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
          {data.map((row) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={row.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary={row.name} />
            </ListItem>
          ))}
        </List>
      </div>

    </section>
  );
}
