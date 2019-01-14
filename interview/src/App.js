import React, { Component } from 'react';
import './App.css';
import {movies$} from './movies';
import './MovieCard';
import MovieCard from './MovieCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesList: [],
    };
  }

  async componentDidMount() {
    let moviesList = await movies$;
    this.setState({ moviesList });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Films</h1>
        </header>
        <div className="App-content">
          <div className="App-selection">
            <p>Ok</p>
          </div>
          <div className="App-movies">
            <MovieCard data={this.state.moviesList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
