import React from "react";
import "./App.css";
import { Movies } from "./features/movies/Movies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lite rotten tomatoes</h1>
      </header>
      <Movies />
    </div>
  );
}

export default App;
