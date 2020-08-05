import React from 'react';
import './App.scss';

function App(): JSX.Element {

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

  return (
    <div className="App">
      <div>

      </div>
    </div>
  );
}

export default App;
