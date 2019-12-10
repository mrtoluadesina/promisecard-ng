import * as types from './types';

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({ type: types.SET_ERROR, message });

export const addPromiseCardItem = () => ({ type: types.ADD_ITEM });
