import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store'
import { Provider } from 'react-redux'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import locales from './assets/locales'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: process.env.NODE_ENV === 'development' ? true : false,
    resources: locales,
    lng: "fr",
    fallbackLng: "fr",
		ns: ['app'],
    defaultNS: 'app',
    saveMissing: true,
    interpolation: {
      escapeValue: false
    }
  });

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
