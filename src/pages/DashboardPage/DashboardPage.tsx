import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import MaterialTable, { Column } from 'material-table';
import ReviewList from './ReviewList';

interface Data {
  name: string;
  timestamp: number;
  starRating: number;
  availability: number;
}

interface TableState {
  columns: Array<Column<Data>>; // is this working?
  data: Data[];
}

export default function DashboardPage(): JSX.Element {

  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Time (\'Applied\' at)', field: 'timestamp', type: 'numeric',
        render: rowData => <span>{rowData.timestamp}:00</span>
      },
      { title: 'Star Rating', field: 'starRating', type: 'numeric',
        render: rowData => <span>{rowData.starRating}/5</span>
      },
      { title: 'Availability', field: 'availability', type: 'numeric',
        render: rowData => <span>{rowData.availability}/10 Shifts</span>
      },
    ],
    data: [
      { name: 'Candidate A', timestamp: new Date().getHours(), starRating: 5, availability: 10},
      { name: 'Candidate B', timestamp: new Date().getHours() +1, starRating: 5, availability: 10},
      { name: 'Candidate C', timestamp: new Date().getHours() +2, starRating: 5, availability: 10},
      { name: 'Candidate D', timestamp: new Date().getHours() +3, starRating: 5, availability: 10},
      { name: 'Candidate E', timestamp: new Date().getHours() +4, starRating: 5, availability: 10},
    ]
  });

  return (
    <section className="container">
      <h1>Review Applicants Simulator</h1>
      <p>This is a simulation of the (Client's) 'Review Applicants Feed' after the Client has posted a Job (selecting
        Manual Process), and after multiple Candidates have 'Applied' and are waiting to be 'Accepted'.</p>
      <p>The 'Candidate Data' is arbitrary data to be used behind the scenes by the 'sorting algorithm'. Results in the
        'Review Applicants Feed' should be expected results regarding ordering of the Candidates which have applied.</p>

      <Divider />
      <h2>Arbitrary Candidate Data</h2>
      <p>Use the '+' button to add, 'Pencil' button to edit, 'Bin' button to delete.</p>
      <p>Use the &uarr; and &darr; arrows to view the data sorted by column (does not affect order of
        Candidates in the 'Review Applicants Feed').</p>

      <TableContainer component={Paper}>
        <MaterialTable
          columns={state.columns}
          data={state.data}
          title={""}
          options={{
            search: false,
            paging: false,
            sorting: true,
          }}
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
      </TableContainer>

      <ReviewList {...state} />

    </section>
  );
}
