import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MaterialTable, { Column } from 'material-table';
import ReviewList from './ReviewList';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { DataInterface as Data } from '../../../interfaces/DataInterface';
import CandidateData from '../../../data/candidateData.json';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface TableState {
  columns: Array<Column<Data>>; // is this working?
  data: Data[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
    },
    details: {
      flexDirection: 'column'
    },
    dividerSection: {
      width: '100%',
      paddingTop: 20,
    },
    backLink: {
      display: 'flex',
      alignSelf: 'left',
    }
  }),
);

export default function ReviewApplicantsPage(): JSX.Element {
  const classes = useStyles();

  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Time (\'Applied\')', field: 'timestamp', type: 'numeric',
        render: rowData => <span>{rowData.timestamp}:00</span>
      },
      { title: 'Star Rating', field: 'starRating', type: 'numeric',
        render: rowData => <span>{rowData.starRating}/5</span>
      },
      { title: 'Availability', field: 'availability', type: 'numeric',
        render: rowData => <span>{rowData.availability}/10 Shifts</span>
      },
      { title: 'Distance', field: 'miles', type: 'numeric',
        render: rowData => <span>{rowData.miles} miles</span>
      },
    ],
    data: CandidateData
  });

  return (
    <section className="container">
      <Link to="/" className={classes.backLink}>
        &larr; Back
      </Link>
      <h1>Review Applicants Feed Simulator</h1>
      <p>This is a simulation of what a Hirer will see after multiple Applicants have
        'Applied' to a Job and are waiting to be 'Accepted'. <br/>Try changing the 'Arbitrary Applicant Data' and seeing how the
        Order is affected by the Sorting Algorithm!</p>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>Arbitrary Applicant Data</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <p>Use the '+' button to add, 'Pencil' button to edit, 'Bin' button to delete.
          <br/>Use the &uarr; and &darr; arrows to view the data sorted by column (does not affect order of
            Applicants in the 'Review Applicants Feed').</p>

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
        </AccordionDetails>
      </Accordion>

      <div className={classes.dividerSection}>
        <Divider></Divider>
      </div>

      <ReviewList {...state} />

    </section>
  );
}
