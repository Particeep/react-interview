import React from 'react'
import axios from "axios"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      nMoviesPerPage: 12,
      currentCategory: 'all',
      currentPage: 0,
      nPages: null
    }
    this.setCategory = this.setCategory.bind(this)
  }

  componentDidMount() {
    axios.get('movies.json')
      .then((response) => {
        this.setState({
          movies: response.data,
          nPages: this.getNPages(response.data, this.state.nMoviesPerPage)
        });
      })
  }

  getNPages(list, pageLength) {
    return Math.ceil(list.length / pageLength)
  }

  setCategory(category) {
    this.setState({
      currentCategory: category,
      currentPage: 0,
      nPages: this.getNPages(this.getMovies(category, undefined, true), this.state.nMoviesPerPage)
    })
  }

  setNMoviesPerPage(nMoviesPerPage) {
    this.setState({
      nMoviesPerPage: nMoviesPerPage,
      currentPage: 0,
      nPages: this.getNPages(this.getMovies(this.state.currentCategory, undefined, true), nMoviesPerPage)
    })
  }

  setPage(nPage) {
    this.setState({
      currentPage: nPage
    })
  }

  getNavigationPages() {
    let pages = []
    for (let i = 0 ; i < this.state.nPages ; i++) {
      pages.push(i+1)
    }
    return pages
  }

  getAvailableCategories() {
    let categories = []
    this.state.movies.forEach((movie) => {
      if (!categories.includes(movie.category))
        categories.push(movie.category)
    })
    return categories
  }

  getMovies(category, nMoviesPerPage, all) {
    if (typeof all !== 'boolean')
      all = false
    let movies = this.state.movies.slice()
    if (category !== 'all') {
      movies = movies.filter((movie) => {
        return movie.category === category
      })
    }
    if (all === false) {
      movies = movies.slice(
        this.state.currentPage * nMoviesPerPage,
        (this.state.currentPage * nMoviesPerPage) + nMoviesPerPage
      )
    }
    return movies
  }

  deleteMovie(id) {
    let movies = this.state.movies.slice()

    movies.some((movie, index) => {
      if (movie.id === id) {
        movies.splice(index, 1)
        return true
      }
    })

    let newState = {
      movies
    }

    let _movies = movies.filter(
      (movie) => (
        (
          this.state.currentCategory !== 'all' &&
          this.state.currentCategory === movie.category
        ) || this.state.currentCategory === 'all'
      )
    )

    let nPages = this.getNPages(_movies, this.state.nMoviesPerPage)

    if (nPages !== this.state.nPages) {
      newState.nPages = nPages
      if (this.state.currentPage > 0) {
        newState.currentPage = this.state.currentPage - 1
      }
    }

    if (_movies.length === 0) {
      newState.currentCategory = 'all'
      newState.currentPage = 0
      newState.nPages = Math.ceil(movies.length / this.state.nMoviesPerPage)
    }

    this.setState(newState)
  }

  render() {
    return (
      <div>
        <div className="movie-filters">
          <div className="filter">
            Catégorie :
            <select value={this.state.currentCategory} onChange={(e) => this.setCategory(e.target.value)}>
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
            <select value={this.state.nMoviesPerPage} onChange={(e) => this.setNMoviesPerPage(parseInt(e.target.value))}>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>

        <div className="movie-list">
          {
            this.getMovies(this.state.currentCategory, this.state.nMoviesPerPage).map((movie) => (
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
                <div className="delete-movie" onClick={() => this.deleteMovie(movie.id)}>
                  <i className="far fa-window-close"></i>
                </div>
              </div>
            ))

          }
        </div>

        {+
          this.state.nPages > 1 ? (
            <div className="pagination">
              <ul>
              <li>Précédent</li>
              {
                this.getNavigationPages().map((page, index) => (
                  <li key={index}
                      className={this.state.currentPage + 1 === page ? 'current' : ''}
                      onClick={() => this.setPage(index)}>
                    {page}
                  </li>
                ))
              }
              <li>Suivant</li>
              </ul>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default App
