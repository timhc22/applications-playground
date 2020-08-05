import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DashboardPage(): JSX.Element {

  const classes = useStyles();

  interface Column {
    // id: 'name' | 'email' | 'phone' | 'login' | 'status';
    // label: string;
    // minWidth?: number;
    // align?: 'right';
    // format?: (value: number) => string;
  }

  const columns: Column[] = [
    // { id: 'name', label: 'Name', minWidth: 170 },
    // { id: 'email', label: 'Email', minWidth: 100 },
    // { id: 'phone', label: 'Phone', minWidth: 170 },
    // { id: 'login', label: 'Last Login', minWidth: 170 },
    // { id: 'status', label: 'Status', minWidth: 170 },
  ];

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

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="container">

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}
