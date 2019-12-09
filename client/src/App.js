import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.scss';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes />
      </Suspense>
    </Router>
  );
}

export default App;
