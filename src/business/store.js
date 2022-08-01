import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import moviesReducer from './reducers/moviesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  moviesReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
