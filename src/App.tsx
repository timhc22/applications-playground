import React from 'react';
import './App.scss';
import ReviewApplicantsPage from './pages/client/ReviewApplicantsPage/ReviewApplicantsPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App(): JSX.Element {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/client/review-applicants" component={ReviewApplicantsPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
