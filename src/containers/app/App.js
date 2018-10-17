import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Navbar from '../../components/Navbar/index';
import Home from '../Home/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
