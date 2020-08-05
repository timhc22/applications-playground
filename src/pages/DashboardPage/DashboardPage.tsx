import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MaterialTable, { Column } from 'material-table';

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

  interface TableState {
    columns: Array<Column<Data>>;
    data: Data[];
  }

  const data: Data[] = [
    { name: 'Candidate A', timestamp: new Date().getHours(), starRating: 5, availability: 10},
    { name: 'Candidate B', timestamp: new Date().getHours() +1, starRating: 5, availability: 10},
  ];

  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Time (\'Applied\' at)', field: 'timestamp', type: 'numeric' },
      { title: 'Star Rating', field: 'starRating', type: 'numeric' },
      { title: 'Availability', field: 'availability', type: 'numeric' },
    ],
    data
  });

  return (
    <section className="container">
      <h1>Review Applicants</h1>
      <p>A simulation of a Client looking at a generated list of Candidates after Client has posted a job and selected
        Manual Process</p>

      <Divider />

      <h2>Candidate Data:</h2>
      <p>To be used behind the scenes by the sorting algorithm</p>
      <TableContainer component={Paper}>

        <MaterialTable
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />

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
      </TableContainer>

      <h2>Review Applicants Feed:</h2>
      <p>What the Client will see re Candidates who have applied</p>
      <div className={classes.listContainer}>
        <List className={classes.list}>
          {data.map((row) => (
            <Card key={row.name} className={classes.card} variant="outlined">
              <CardContent>
                <ListItemAvatar>
                  <Avatar alt={row.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary={row.name} />
              </CardContent>
              <CardActions>
                {/*<Button size="small">Learn More</Button>*/}
              </CardActions>
            </Card>
          ))}
        </List>
      </div>

    </section>
  );
}
