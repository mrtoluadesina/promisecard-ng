import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.scss';

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
