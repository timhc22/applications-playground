import React from 'react';
import './App.scss';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App(): JSX.Element {

  return (
    <div className="App">
      <div>
        <DashboardPage />
      </div>
    </div>
  );
}

export default App;
