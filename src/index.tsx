import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configureStore";

const store = configureStore();

const renderApp = () =>
  render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
