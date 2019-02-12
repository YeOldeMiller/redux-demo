const redux = require('redux'),
  initialState = {
    counter: 0
  };

//Reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INC_COUNTER':
      return { ...state, counter: state.counter + 1 };
    case 'ADD_COUNTER':
      return { ...state, counter: state.counter + action.value };
    default:
      return state;
  }
};

//Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

//Action Dispatch
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
