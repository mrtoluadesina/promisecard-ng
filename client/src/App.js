import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import './App.scss';
import Header from './components/Header';
import ErrorBoundary from './constants/errorBoundary';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <div className="wrapper">
            <MobileMenu />
            <Header />
            <Suspense fallback={<div>Loading ...</div>}>
              <Routes />
            </Suspense>
          </div>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
