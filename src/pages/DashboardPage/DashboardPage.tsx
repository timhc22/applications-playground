import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

export default function DashboardPage(): JSX.Element {

  return (
    <section className="container">
      <div>
        <section className="container">
          <h2>Hirer</h2>
          <Link to="/client/review-applicants" className="button">
            Review Applicants Feed Simulator
          </Link>
        </section>
      </div>
    </section>
  );
}
