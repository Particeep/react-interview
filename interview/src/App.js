import React, { Component } from 'react';
import './App.css';
import {movies$} from './movies';
import './MovieCard';
import MovieCard from './MovieCard';

export default class App extends Component {
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

  deleteMovieCard(itemId) {
    let arrMovies = this.state.moviesList;
    arrMovies.splice(itemId, 1);
    this.setState({moviesList: arrMovies});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Films</h1>
        </header>
        <div className="App-content">
          <div className="App-selection">
            <p>Filtre par catégories</p>
          </div>
          <div className="App-movies">
            <MovieCard 
              data={this.state.moviesList} 
              delete={item => this.deleteMovieCard(item)}
              like={item => this.likeMovieCard(item)}
              dislike={item => this.dislikeMovieCard(item)}
            />
          </div>
        </div>
      </div>
    );
  }
}

