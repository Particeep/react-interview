import React from 'react'
import axios from "axios"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      moviesPerPage: 20,
      currentCategory: 'all'
    }
    this.setCategory = this.setCategory.bind(this)
  }

  componentDidMount() {
    axios.get('movies.json')
      .then((response) => {
        this.setState({
          movies: response.data
        });
      })
  }

  setCategory(category) {
    this.setState({
      currentCategory: category
    })
  }

  getAvailableCategories() {
    let categories = []
    this.state.movies.forEach((movie) => {
      if (!categories.includes(movie.category))
        categories.push(movie.category)
    })
    return categories
  }

  getMovies(category, moviesPerPage) {
    let movies = this.state.movies.slice()
    if (category != 'all') {
      movies.forEach((movie, index) => {
        if (movie.category !== category)
          movies.splice(index, 1)
      })
    }
    return (
      movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <p className="movie-title">{movie.title}</p>
          <p className="movie-category">Catégorie: {movie.category}</p>
          <div className="like-bar">
            <div className="like-button">
              <i className="far fa-thumbs-up"></i> {movie.likes}
            </div>
            <div className="dislike-button">
              <i className="far fa-thumbs-down"></i> {movie.dislikes}
            </div>
          </div>
          <div className="delete-movie">
            <i className="far fa-window-close"></i>
          </div>
        </div>
      ))
    )
  }

  render() {
    return (
      <div>
        <div className="movie-filters">
          <div className="filter">
            Catégorie :
            <select onChange={(e) => this.setCategory(e.target.value)}>
              <option value="all">Toutes</option>
              {
                this.getAvailableCategories().map((category, index) => (
                  <option value={category} key={index}>{category}</option>
                ))
              }
            </select>
          </div>
          <div className="filter">
            Films par page :
            <select defaultValue="12">
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
        <div className="movie-list">
          {this.getMovies(this.state.currentCategory, 12)}
        </div>
      </div>
    );
  }
}

export default App
