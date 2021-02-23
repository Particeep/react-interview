import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import movieReducer from './redux/reducers/movieReducer';
import filterMovieReducer from './redux/reducers/filterMovieReducer';
import { Provider } from 'react-redux';

const store = createStore(combineReducers({
  movieReducer,
  filters: filterMovieReducer}),
  
  );

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
