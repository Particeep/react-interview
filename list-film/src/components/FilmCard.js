import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  IoMdThumbsUp,
  IoMdThumbsDown,
  IoIosHeartEmpty,
  IoIosHeart
} from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

class FilmCard extends Component {
  state = {
    isLiked: false
  };

  /**
   * event click to like
   */
  handleLike(film) {
    const { handleLike } = this.props;
    const { isLiked, isShown } = this.state;
    this.setState({ isLiked: !isLiked, isShown: !isShown }, () => {
      const newIsLiked = !isLiked;
      handleLike(film, newIsLiked);
    });
  }

  render() {
    const { isLiked } = this.state;
    const { id, title, category, likes, dislikes, handelDelete } = this.props;
    const film = {
      id,
      title,
      category,
      likes,
      dislikes
    };

    return (
      <div>
        <h1>{title}</h1>
        <p>{category}</p>
        <div className="row-likes">
          <div className="delete-like">
            <div className="trash">
              <FaTrashAlt size={25} onClick={() => handelDelete(film)} />
            </div>
            <div className="hearts">
              {!isLiked && (
                <IoIosHeartEmpty
                  size={25}
                  onClick={() => this.handleLike(film)}
                />
              )}
              {isLiked && (
                <IoIosHeart size={25} onClick={() => this.handleLike(film)} />
              )}
            </div>
          </div>
          <div className="like-dislike">
            <div className="likes">
              <IoMdThumbsUp size={30} />
              <span>{likes}</span>
            </div>
            <div className="dislikes">
              <IoMdThumbsDown size={30} />
              <span>{dislikes}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FilmCard.propTypes = {
  handleLike: PropTypes.func.isRequired,
  handelDelete: PropTypes.func.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number
};

FilmCard.defaultProps = { id: "", dislikes: 0 };

export default FilmCard;
