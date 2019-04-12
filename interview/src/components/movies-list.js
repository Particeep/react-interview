import React, { Component } from 'react';
import Select from 'react-select';

import { paginate } from '../utils/array';
import { movies$ } from '../api/movies';
import MovieCard from './movie-card';

class MoviesList extends Component {
  state = {
    movies: [],
    selectedCategories: [],
    perpage: 6,
    currentPage: 1,
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
  onInputChange = ({ target }) => {
    this.setState(prevState => ({ [target.name]: target.value }));
  };
  onCategorySelect = selectedOptions => {
    this.setState(prevState => ({
      selectedCategories: selectedOptions.map(op => op.value),
    }));
  };
  onPreviousClick = ({ target }) => {
    this.setState(({ currentPage }) => ({ currentPage: currentPage - 1 }));
  };
  onNextClick = ({ target }) => {
    this.setState(({ currentPage }) => ({ currentPage: currentPage + 1 }));
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
    const { movies, selectedCategories, perpage, currentPage } = this.state;

    const _filtredMovies = this.filtredMovies(movies, selectedCategories);
    const _moviesToRender = paginate(_filtredMovies, perpage, currentPage);
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
          {_moviesToRender.map(m => (
            <MovieCard
              key={m.id}
              onDelete={this.onMovieDelete}
              onLike={this.onMovieLike}
              onDislike={this.onMovieDislike}
              {...m}
            />
          ))}
        </div>
        <div className="movies_list__pagination">
          <button
            className="btn_previous"
            name="previous"
            disabled={currentPage <= 1}
            onClick={this.onPreviousClick}
          >
            PREVIOUS
          </button>
          <div className="page_input_wrap">
            <input
              className="perpage_input"
              type="number"
              name="perpage"
              value={perpage}
              onChange={this.onInputChange}
            />
            <div>| {currentPage} |</div>
          </div>
          <button
            className="btn_next"
            name="next"
            disabled={currentPage >= _filtredMovies.length / perpage}
            onClick={this.onNextClick}
          >
            NEXT
          </button>
        </div>
      </div>
    );
  }
}

export default MoviesList;
