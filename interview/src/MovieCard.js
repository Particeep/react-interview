import React, { Component } from 'react';
import './MovieCard.css';

const ValueLikes = (likes, dislikes) => {
  return (likes / (likes + dislikes) * 100);
};

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.data.map((item, key) => {
        return (
            <article key={item.id}>
                <b>{item.title}</b>
                <span>{item.category}</span>
                <div className="bottom-card">
                  <div className="user-selected">
                    <a href="#" onClick={() => this.props.delete(item.id)}><span role="img" aria-label="Supprimer">❌</span> Delete</a>
                    <a href="#" onClick={() => this.props.like(item.id)}><span role="img" aria-label="Like">👍</span> Like</a>
                    <a href="#" onClick={() => this.props.dislike(item.id)}><span role="img" aria-label="Dislike">👎</span> Dislike</a>
                  </div>
                  <div className="progress-bar">
                    <progress value={ValueLikes(item.likes, item.dislikes)} max="100"></progress>
                  </div>
                </div>
            </article>
        );
      })
    );
  }
}

export default MovieCard;
