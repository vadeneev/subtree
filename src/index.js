import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INC': return { count: state.count + 1 };
    case 'DEC': return { count: state.count - 1 };
    default: return state;
  }
};

const reducers = combineReducers({
  counter: countReducer,
});

export const actions = {
  inc: () => ({ type: 'INC' }),
  dec: () => ({ type: 'DEC' }),
};

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
