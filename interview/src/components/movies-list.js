import React, { Component } from 'react';
import Select from 'react-select';

import { movies$ } from '../api/movies';
import MovieCard from './movie-card';

class MoviesList extends Component {
  state = {
    movies: [],
    selectedCategories: [],
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
    const { movies, selectedCategories } = this.state;
    const newmovies = movies.filter(m => m.id !== id);
    const newselectedCategories = selectedCategories.filter(cat =>
      this.extractedCategories(newmovies).includes(cat)
    );
    this.setState(prevState => ({
      movies: newmovies,
      selectedCategories: newselectedCategories,
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
  onCategorySelect = selectedOptions => {
    this.setState(prevState => ({
      selectedCategories: selectedOptions.map(op => op.value),
    }));
  };
  extractedCategories = (movies = []) => {
    const _categories = movies.map(m => m.category);
    return _categories.filter((c, i) => _categories.indexOf(c) === i);
  };
  filtredMovies = (movies = [], selectedCategories = []) => {
    return selectedCategories.length === 0
      ? movies
      : movies.filter(m => selectedCategories.includes(m.category));
  };

  render() {
    const { movies, selectedCategories } = this.state;
    return (
      <div>
        <div className="movies_list__multiselect">
          <Select
            placeholder="Select categories..."
            value={selectedCategories.map(cat => ({
              value: cat,
              label: cat,
            }))}
            onChange={this.onCategorySelect}
            isMulti={true}
            options={this.extractedCategories(movies).map(cat => ({
              value: cat,
              label: cat,
            }))}
          />
        </div>
        <div className="movies_list">
          {this.filtredMovies(movies, selectedCategories).map(m => (
            <MovieCard
              key={m.id}
              onDelete={this.onMovieDelete}
              onLike={this.onMovieLike}
              onDislike={this.onMovieDislike}
              {...m}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MoviesList;
