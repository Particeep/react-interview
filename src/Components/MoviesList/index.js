import React, { Component } from 'react';
import './styles.css';
import Movies from '../movies.js';
import Movie from '../Movie';

class MoviesList extends Component {
  state = {
    movies : Movies
  }

   delete = (index) => {
    this.setState(prevState =>({
      movies : [
      ...prevState.movies.slice(0,index),
      ...prevState.movies.slice(index + 1)
      ]})
    )
  }

	render() {
		return (
			<div className="game-list">
	            {this.state.movies.map((movie, index) => movie.category === this.props.filter || this.props.filter === 'All' ? <Movie key={index} movie={movie} delete={() => this.delete(index)} /> : null)}
	        </div>
		);
	}
}

export default MoviesList;