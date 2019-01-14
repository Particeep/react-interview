import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {

  render() {
    return (
      this.props.data.map((item, key) => {
        return (
            <article key={item.id}>
                <b>{item.title}</b>
                <span>{item.category}</span>
            </article>
        );
      })
    );
  }
}

export default MovieCard;
