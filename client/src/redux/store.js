import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const enhancers = [];

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}

if (process.env.NODE_ENV === 'production') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(rootReducer, composedEnhancers);

export default store;
