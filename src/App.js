import React, { Component } from "react";
import {
	MdReplay,
	MdChevronLeft,
	MdChevronRight,
	MdFirstPage,
	MdLastPage
} from "react-icons/md";
import Movie from "./Movie";
import Multiselect from "./Multiselect";
import FlipMove from "react-flip-move";
import { movies$ } from "./movies";
import "./App.css";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			filter: [],
			display: 4,
			page: 1
		};
	}

	componentDidMount() {
		this.getMovies();
	}

	getMovies() {
		movies$.then(movies =>
			this.setState(
				{
					movies: JSON.parse(JSON.stringify(movies)),
					maxPages: Math.ceil(movies.length / this.state.display)
				},
				() => {
					this.setState({
						filteredMovies: this.state.movies
					});
				}
			)
		);
	}

	refresh() {
		this.getMovies();
		this.setState({ filter: [] });
		document
			.querySelectorAll(".filter-container.categories .dropdown div")
			.forEach(el => {
				el.classList.remove("selected");
			});
	}

	getIndex(id) {
		let index = this.state.movies.findIndex(movie => movie.id === id);
		if (index >= 0) return index;
		return -1;
	}

	deleteMovie(id) {
		let movies = this.state.movies;
		let index = this.getIndex(id);
		if (index >= 0) {
			movies.splice(index, 1);
			this.setState({ movies }, () => {
				this.setMaxPages();
				this.getFilteredMovies();
			});
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
			this.setState(
				prevState => ({
					filter: [...prevState.filter, category],
					page: 1
				}),
				() => this.getFilteredMovies()
			);
		} else {
			let filter = this.state.filter;
			filter.splice(index, 1);
			this.setState({ filter, page: 1 }, () => this.getFilteredMovies());
		}
	}

	getFilteredMovies() {
		let filteredMovies = this.state.movies.filter(
			movie =>
				this.state.filter.length === 0 ||
				this.state.filter.find(cat => cat === movie.category)
		);
		console.log(filteredMovies.length);
		if (filteredMovies.length === 0) {
			this.setState({ filter: [], filteredMovies: this.state.movies }, () =>
				this.setMaxPages()
			);
		} else {
			this.setState(
				{
					filteredMovies
				},
				() => this.setMaxPages()
			);
		}
	}

	selectDisplay(count) {
		this.setState(
			{
				display: count,
				page: 1
			},
			() => this.setMaxPages()
		);
	}

	firstPage() {
		this.setState({
			page: 1
		});
	}
	changePage(count) {
		let newPage = this.state.page + count;
		if (newPage > 0 && newPage <= this.state.maxPages)
			this.setState({
				page: newPage
			});
	}
	lastPage() {
		this.setState({
			page: this.state.maxPages
		});
	}

	setMaxPages() {
		this.setState(
			{
				maxPages: Math.ceil(this.state.filteredMovies.length / this.state.display)
			},
			() => {
				if (this.state.page > this.state.maxPages) {
					this.changePage(-1);
				}
			}
		);
	}

	renderMovies() {
		if (!this.state.movies || !this.state.filteredMovies) return null;

		let counter = 0;
		let pageCounter = (this.state.page - 1) * this.state.display;
		return this.state.filteredMovies.map((movie, index) => {
			if (counter === this.state.display || index < pageCounter) return null;

			counter++;
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
					<MdReplay className="refresh" onClick={() => this.refresh()} />
					<Multiselect
						type="categories"
						options={this.getCategories()}
						onSelect={category => this.selectCategory(category)}
						multiple={true}
					/>
					<Multiselect
						type="display"
						options={[4, 8, 12]}
						onSelect={count => this.selectDisplay(count)}
						multiple={false}
						selected={4}
					/>
				</div>
				<FlipMove className="card-container">{this.renderMovies()}</FlipMove>
				<div className="nav page">
					<MdFirstPage onClick={() => this.firstPage()} />
					<MdChevronLeft onClick={() => this.changePage(-1)} />
					Page {this.state.page}
					<MdChevronRight onClick={() => this.changePage(1)} />
					<MdLastPage onClick={() => this.lastPage()} />
				</div>
			</div>
		);
	}
}
