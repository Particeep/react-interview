import React, { Component } from "react";
import PropTypes from "prop-types";

class FilmCard extends Component {
  state = {
    isLiked: false
  };

  handelLike(film) {
    const { handelLike } = this.props;
    const { isLiked } = this.state;
    this.setState({ isLiked: !isLiked }, () => {
      // const { isNewLiked } = this.state;
      handelLike(film, this.state.isLiked);
    });
  }

  render() {
    const { isLiked } = this.state;
    const { film, handelDelete } = this.props;
    const { title, category, likes, dislikes } = film;
    return (
      <div>
        <h1>{title}</h1>
        <p>{category}</p>
        <p>
          like :{likes} dislike:{dislikes}
        </p>
        <button type="button" onClick={() => handelDelete(film)}>
          Delete
        </button>
        <button type="button" onClick={() => this.handelLike(film)}>
          {!isLiked ? "Like" : "Dislike"}
        </button>
      </div>
    );
  }
}

FilmCard.propTypes = {
  handelLike: PropTypes.func.isRequired,
  handelDelete: PropTypes.func.isRequired
};

// FilmCard.defaultProps = { handelLike: "toto" };

export default FilmCard;
