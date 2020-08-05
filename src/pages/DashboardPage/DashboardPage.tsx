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
          title={""}
          options={{
            search: false,
            paging: false
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
