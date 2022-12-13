import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Import the provider of react-redux
import { Provider } from "react-redux";
//Import redux store
import { store } from "./logic/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
