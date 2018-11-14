import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [
        {
          id: '1',
          title: 'Oceans 8',
          category: 'Comedy',
          likes: 4,
          dislikes: 1
        }, {
          id: '2',
          title: 'Midnight Sun',
          category: 'Comedy',
          likes: 2,
          dislikes: 0
        }, {
          id: '3',
          title: 'Les indestructibles 2',
          category: 'Animation',
          likes: 3,
          dislikes: 1
        }, {
          id: '4',
          title: 'Sans un bruit',
          category: 'Thriller',
          likes: 6,
          dislikes: 6
        }, {
          id: '5',
          title: 'Creed II',
          category: 'Drame',
          likes: 16,
          dislikes: 2
        }, {
          id: '6',
          title: 'Pulp Fiction',
          category: 'Thriller',
          likes: 11,
          dislikes: 3
        }, {
          id: '7',
          title: 'Pulp Fiction',
          category: 'Thriller',
          likes: 12333,
          dislikes: 32
        }, {
          id: '8',
          title: 'Seven',
          category: 'Thriller',
          likes: 2,
          dislikes: 1
        }, {
          id: '9',
          title: 'Inception',
          category: 'Thriller',
          likes: 2,
          dislikes: 1
        }, {
          id: '10',
          title: 'Gone Girl',
          category: 'Thriller',
          likes: 22,
          dislikes: 12
        },
      ]
    }
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
            <select>
              <option>4</option>
              <option>8</option>
              <option selected>12</option>
            </select>
          </div>
        </div>
        <div className="movie-list">
          {
            this.state.movies.map((movie) => (
              <div className="movie-card">
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
