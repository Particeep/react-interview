import React, { Component } from 'react';
import { movies$ } from '../api/movies';
import MovieCard from './movie-card';

class MoviesList extends Component {
  state = {
    movies: [],
    error: undefined,
  };

  componentDidMount() {
    movies$.then(this.setMovies, this.setError);
  }

  setMovies = movies => {
    this.setState(prevState => ({ movies, error: undefined }));
  };
  setError = error => {
    this.setState(prevState => ({ error, movies: [] }));
  };
  onMovieDelete = id => () => {
    this.setState(({ movies }) => ({
      movies: movies.filter(m => m.id !== id),
    }));
  };
  onMovieLike = id => () => {
    this.setState(({ movies }) => ({
      movies: movies.map(m => (m.id !== id ? m : { ...m, likes: m.likes + 1 })),
    }));
  };
  onMovieDislike = id => () => {
    this.setState(({ movies }) => ({
      movies: movies.map(m =>
        m.id !== id ? m : { ...m, dislikes: m.dislikes + 1 }
      ),
    }));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="movies_list">
        {movies.map(m => (
          <MovieCard
            key={m.id}
            {...m}
            onDelete={this.onMovieDelete}
            onLike={this.onMovieLike}
            onDislike={this.onMovieDislike}
          />
        ))}
      </div>
    );
  }
}

export default MoviesList;
