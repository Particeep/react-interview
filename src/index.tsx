import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot((document.getElementById('root') as HTMLDivElement));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
