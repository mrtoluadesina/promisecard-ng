import { SET_LOADING, SET_ERROR, ADD_ITEM } from './types';

const initialState = {
  isLoading: false,
  error: '',
  promiseCardItems: [
    {
      name: '',
    },
  ],
};

const addItem = state => {
  const promiseCardItems = state.promises.slice(0);
  promiseCardItems.push({
    name: '',
  });
  return promiseCardItems;
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.message,
      };
    case ADD_ITEM:
      return {
        ...state,
        promiseCardItems: addItem(state),
      };
    default:
      return state;
  }
};
