import * as actionTypes from './actionTypes';

export const storeResultAsync = val => ({ type: actionTypes.STORE_RESULT, payload: val });
export const storeResult = val => (
  dispatch => setTimeout(() => (
    dispatch(storeResultAsync(val))
  ), 1000)
);
export const removeResult = val => ({ type: actionTypes.REMOVE_RESULT, payload: val });