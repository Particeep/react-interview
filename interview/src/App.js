import React, { Component } from 'react';
import MoviesList from './components/movies-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> React Interview </h1>
        </header>
        <div className="App-header">
          <MoviesList />
        </div>
      </div>
    );
  }
}

export default App;
