import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// outils
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

import moviesReducer from './reducers/moviesReducer';

// Combiner les reducers car on en aura plusieurs
const rootReducer = combineReducers({
  moviesReducer
});

// Générer le store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
