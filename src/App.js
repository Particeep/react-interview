import React from 'react'
import axios from "axios"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      moviesPerPage: 20
    }
  }

  componentDidMount() {
    axios.get('movies.json')
      .then((response) => {
        this.setState({
          movies: response.data
        });
      })
  }

  render() {
    return (
      <div>
        <div className="movie-filters">
          <div className="filter">
            Catégorie :
            <select>
              <option>Toutes</option>
            </select>
          </div>
          <div className="filter">
            Films par page :
            <select defaultValue="12">
              <option>4</option>
              <option>8</option>
              <option>12</option>
            </select>
          </div>
        </div>
        <div className="movie-list">
          {
            this.state.movies.map((movie) => (
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
          }
        </div>
      </div>
    );
  }
}

export default App
