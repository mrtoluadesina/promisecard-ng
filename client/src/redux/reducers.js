import { combineReducers } from 'redux';

import PromiseCardReducer from '../views/Home/redux/reducer';

const rootReducer = combineReducers({
  card: PromiseCardReducer,
});

export default rootReducer;
