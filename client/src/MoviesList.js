import React, { Component, Fragment } from 'react'

import { movies$ } from './MovieStore'
import { LikesBar } from './Components/LikesBar'
import { DeleteButton, FilterButton, LikeButton, DislikeButton } from './Components/Button';

class MoviesList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			movies: [],
			filteredMovies: [],
			category: [],
			filters: [],
			liked: [],
			disliked: [],
			loading: true
		}
	}

	componentDidMount() {
		movies$
		.then(data => this.setState({ movies: data, filteredMovies: data, loading: false }, () => 
			this.getMoviesCategory(data)))
	}

	getMoviesCategory(movies) {
		const distinctCategories = [...new Set(movies.map(m => m.category))]
		const filters = distinctCategories.filter(f => this.state.filters.indexOf(f) !== -1)
		this.setState({category: distinctCategories, filters })
	}

	handleDelete = movie => {
		const { liked, disliked } = this.state
		const newList = this.state.movies.filter(m => m !== movie)
		const newFilteredList = this.state.filteredMovies.filter(m => m !== movie)

		this.setState({ movies: newList, filteredMovies: newFilteredList }, () => {
			this.deleteLike(liked.indexOf(movie.id))
			this.deleteDislike(disliked.indexOf(movie.id))
			this.getMoviesCategory(newList)
		})
	}

	handleLike = movie => {
		const { liked, disliked } = this.state

		if( liked.indexOf(movie.id) !== -1 ) {
			this.deleteLike(liked.indexOf(movie.id))
			return
		}
		this.addLike(movie.id)
		this.deleteDislike(disliked.indexOf(movie.id))
	}

	handleDislike = movie => {
		const { liked, disliked } = this.state

		if( disliked.indexOf(movie.id) !== -1 ) {
			this.deleteDislike(disliked.indexOf(movie.id))
			return
		}
		this.addDislike(movie.id)
		this.deleteLike(liked.indexOf(movie.id))
	}

	handleFilter = category => {
		const { filters } = this.state
		const filterExist = filters.indexOf(category)
		let newFilters = filters

		if (filterExist !== -1) {
			deleteFilter(filters, filterExist)
		} else {
			newFilters.push(category)
		}

		this.setState({ filters: newFilters }, () => 
			this.filteredMoviesList(newFilters))
	}

	filteredMoviesList(filters) {
		if (filters.length !== 0) {
			const newList = this.state.movies.filter(m => filters.indexOf(m.category) !== -1)
			this.setState({ filteredMovies: newList })
		} else {
			this.setState({ filteredMovies: this.state.movies })
		}
	}

	addLike = id => this.setState(prevState => ({ liked: [...prevState.liked, id ] }))
	deleteLike = id => {
		let { liked } = this.state
		liked.splice(id, 1)
		this.setState(liked)
	}

	addDislike = id => this.setState(prevState => ({ disliked: [...prevState.disliked, id ] }))
	deleteDislike = id => {
		let { disliked } = this.state
		disliked.splice(id, 1)
		this.setState(disliked)
	}

	render() {
		const { filteredMovies, filters, liked, disliked, category, loading } = this.state

		if (loading) {
			return <p>Loading...</p>
		}

		return(
			<Fragment>

				<div className="filters">
					Filter by: 
					{ category.length !== 0 ? category.map((c, i) => 
							<FilterButton 
								key={i}
								value={c} 
								active={ (filters.indexOf(c) !== -1 ? 'active' : '' ) }
								onClick={ () => this.handleFilter(c) } 
							/> ) :
							<span>No category</span>
						}
				</div>

				<div className="card-list">
					{ filteredMovies.length !== 0 ? filteredMovies.map( m => (
							<div className="card" key={ m.id }>
								<h2>{ m.title }</h2>
								<p>{ m.category }</p>
								<LikesBar likes={ m.likes } dislikes={ m.dislikes } />
								<LikeButton 
									active={ (liked.indexOf(m.id) !== -1 ? 'active' : '' ) }
									onClick={ () => this.handleLike(m) } 
								/>
								<DislikeButton 
									active={ (disliked.indexOf(m.id) !== -1 ? 'active' : '' ) }
									onClick={ () => this.handleDislike(m) } 
								/>
								<DeleteButton onClick={ () => this.handleDelete(m) } />
							</div>
						)
					) : 
						<p>No movies</p>
					}
				</div>

			</Fragment>
		)
	}
}

export default MoviesList


const deleteFilter = (filters, elem) => filters.splice(elem,1)
