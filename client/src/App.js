import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes />
      </Suspense>
    </Router>
  );
}

export default App;
