import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./views/Home'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
