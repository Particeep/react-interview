import React from "react";
import "./App.css";
import { Movies } from "./features/movies/Movies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Movies />
      </header>
    </div>
  );
}

export default App;
