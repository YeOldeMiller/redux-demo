import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: []
};

const resultsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT: return { ...state, results: state.results.concat(action.payload) };
    case actionTypes.REMOVE_RESULT:
      return { ...state, results: state.results.filter((e, i) => i !== action.payload) };
    default: return state;
  }
};

export default resultsReducer;