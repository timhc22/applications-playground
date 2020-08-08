import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

export default function DashboardPage(): JSX.Element {

  return (
    <section className="container">
      <div>
        <section className="container">
          <h2>Client</h2>
          <Link to="/client/review-applicants" className="button">
            Review Applicants Feed Simulator
          </Link>

          <Divider orientation="horizontal" flexItem />
          <h2>Candidate</h2>
          <Link to="/candidate/job-feed" className="button">
            Job Feed Simulator (in progress)
          </Link>
        </section>
      </div>
    </section>
  );
}
