import React from "react";
import { render } from "react-dom";
import Test from './test';
import './styles.css'
function App() {
  
  return (
    <div className="App">
     <Test/>
    </div>
  );
}

const rootElement = document.getElementById("app");
render(<App />, rootElement);
