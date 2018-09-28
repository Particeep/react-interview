import React, { Component } from 'react';
import './styles.css';
import LikeBar from '../LikeBar';

class Movie extends Component {

	render() {
		return (
			<div className="movie">
				<h1>{this.props.movie.title}</h1>
				<strong>{this.props.movie.category}</strong>
				<LikeBar  likes={this.props.movie.likes} dislikes={this.props.movie.dislikes} id={this.props.movie.id}/>
				<button onClick={this.props.delete}>Delete</button>
			</div>

		);
	}
}

export default Movie;