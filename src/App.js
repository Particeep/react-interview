import React, { Component } from "react";
import { MdReplay } from "react-icons/md";
import Movie from "./Movie";
import Multiselect from "./Multiselect";
import FlipMove from "react-flip-move";
import { movies$ } from "./movies";
import "./App.css";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			filter: []
		};
	}

	componentDidMount() {
		this.getMovies();
	}

	getMovies() {
		movies$.then(movies => this.setState({ movies: JSON.parse(JSON.stringify(movies)) }));
	}

	refresh() {
		this.getMovies();
		this.setState({ filter: [] });
		document.querySelectorAll(".dropdown div").forEach(el => {
			el.classList.remove("selected");
		});
	}

	getIndex(id) {
		let index = this.state.movies.findIndex(movie => movie.id === id);
		if (index >= 0) return index;
		return null;
	}

	deleteMovie(id) {
		let movies = this.state.movies;
		let index = this.getIndex(id);
		if (index >= 0) {
			movies.splice(index, 1);
			this.setState({ movies });
		}
	}

	likeMovie(id) {
		let movies = this.state.movies;
		movies[this.getIndex(id)].likes++;
		this.setState({
			movies
		});
	}

	dislikeMovie(id) {
		let movies = this.state.movies;
		movies[this.getIndex(id)].dislikes++;
		this.setState({
			movies
		});
	}

	getCategories() {
		if (!this.state.movies) return null;

		let categories = [];
		this.state.movies.forEach(movie => {
			categories.push(movie.category);
		});
		return categories.filter((key, idx) => categories.lastIndexOf(key) === idx);
	}

	selectCategory(category) {
		let index = this.state.filter.findIndex(cat => cat === category);
		if (index === -1) {
			this.setState(prevState => ({
				filter: [...prevState.filter, category]
			}));
		} else {
			let filter = this.state.filter;
			filter.splice(index, 1);
			this.setState({ filter });
		}
	}

	renderMovies() {
		if (!this.state.movies) return null;

		return this.state.movies.map(movie => {
			if (
				this.state.filter.length > 0 &&
				!this.state.filter.find(cat => cat === movie.category)
			)
				return null;
			return (
				<Movie
					key={movie.id}
					id={movie.id}
					title={movie.title}
					category={movie.category}
					likes={movie.likes}
					dislikes={movie.dislikes}
					onDelete={id => this.deleteMovie(id)}
					onLike={id => this.likeMovie(id)}
					onDislike={id => this.dislikeMovie(id)}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="nav">
					<MdReplay onClick={() => this.refresh()} />
					<Multiselect
						categories={this.getCategories()}
						onSelect={category => this.selectCategory(category)}
					/>
				</div>
				<FlipMove className="card-container">{this.renderMovies()}</FlipMove>
			</div>
		);
	}
}
