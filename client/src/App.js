import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.scss';
import Header from './components/Header';
import ErrorBoundary from './constants/errorBoundary';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="wrapper">
          <MobileMenu />
          <Header />
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes />
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
