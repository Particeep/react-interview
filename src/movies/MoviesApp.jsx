import React from "react";

import MoviesList from "./MoviesList.jsx";
import moviesData from "./movies";

export default class MoviesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: moviesData,
      currentMovieFilter: null,
      currentSelectedPageIndex: 0,
      currentSelectedCountElement: moviesData.length
    };

    this.handleMovieFilter = this.handleMovieFilter.bind(this);
    this.handleMovieDelete = this.handleMovieDelete.bind(this);
    this.handleMovieLike = this.handleMovieLike.bind(this);
    this.handleMovieDislike = this.handleMovieDislike.bind(this);
    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.handleCountElementSelect = this.handleCountElementSelect.bind(this);
    this.handlePageBack = this.handlePageBack.bind(this);
    this.handlePageNext = this.handlePageNext.bind(this);
  }

  handleMovieFilter(movieCategoryToFilter) {
    this.setState({ currentMovieFilter: movieCategoryToFilter });
  }

  handleMovieDelete(movieToDelete) {
    const oldMovies = this.state.movies;
    this.setState({
      movies: oldMovies.filter(movie => movie.id !== movieToDelete.id)
    });
  }

  handleMovieDislike(movieToDislike) {
    const oldMovies = this.state.movies;
    this.setState({
      movies: oldMovies.map(movie => {
        if (movie.id === movieToDislike.id) {
          movie.likes += -1;
          return movie;
        } else {
          return movie;
        }
      })
    });
  }

  handleMovieLike(movieToLike) {
    const oldMovies = this.state.movies;
    this.setState({
      movies: oldMovies.map(movie => {
        if (movie.id === movieToLike.id) {
          movie.likes += 1;
          return movie;
        } else {
          return movie;
        }
      })
    });
  }

  handlePageSelect(selectedPageIndex) {
    this.setState({ currentSelectedPageIndex: selectedPageIndex });
  }
  handlePageBack() {
    this.setState({
      currentSelectedPageIndex: Math.max(
        this.state.currentSelectedPageIndex - 1,
        0
      )
    });
  }
  handlePageNext() {
    const {
      currentSelectedCountElement,
      currentSelectedPageIndex,
      movies
    } = this.state;
    this.setState({
      currentSelectedPageIndex: Math.min(
        currentSelectedPageIndex + 1,
        movies.length / currentSelectedCountElement
      )
    });
  }

  handleCountElementSelect(selectedCountElement) {
    this.setState({ currentSelectedCountElement: selectedCountElement });
  }

  render() {
    const {
      movies,
      currentMovieFilter,
      currentSelectedPageIndex,
      currentSelectedCountElement
    } = this.state;
    let filteredMovies =
      currentMovieFilter !== null
        ? movies.filter(movie => movie.category === currentMovieFilter)
        : movies;
    const indexD = currentSelectedCountElement * currentSelectedPageIndex;
    const indexA = currentSelectedCountElement * (currentSelectedPageIndex + 1);
    filteredMovies = filteredMovies.slice(indexD, indexA);
    let categories = movies.map(movie => movie.category);
    categories = Array.from(new Set(categories));

    return (
      <div>
        <h1>Movies App</h1>
        <MoviesList
          onPageSelect={this.handlePageSelect}
          onPageBack={this.handlePageBack}
          onPageNext={this.handlePageNext}
          onMovieDelete={this.handleMovieDelete}
          onMovieDislike={this.handleMovieDislike}
          onMovieLike={this.handleMovieLike}
          onMovieFilter={this.handleMovieFilter}
          onCountElementSelect={this.handleCountElementSelect}
          movies={filteredMovies}
          categories={categories}
        />
      </div>
    );
  }
}
