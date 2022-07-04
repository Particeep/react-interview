import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import "./Movie.css";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/actions/moviesActions";

/**
 * Représente une carte avec un film de la liste
 */
const Movie = ({ movie }) => {
  // nb de likes et dislikes
  const [like, setLike] = useState(movie.likes);
  const [dislike, setDislike] = useState(movie.dislikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const dispatch = useDispatch();

  /**
   * Action du bouton like d'un film
   */
  const isLinking = () => {
    // si le film est liké, désactiver le like
    if (isLiked) {
      setIsLiked(false);
      setLike(like - 1);
      // sinon liker
    } else {
      setIsLiked(true);
      setLike(like + 1);
      // si le film était disliké, désactiver le dislike, like+1 et dislike-1
      if (isDisliked) {
        setIsDisliked(false);
        setLike(like + 1);
        setDislike(dislike - 1);
      }
    }
  };

  /**
   * Action du bouton dislike d'un film
   */
  const isDislinking = () => {
    // si le film est disliké, désactiver le dislike
    if (isDisliked) {
      setIsDisliked(false);
      setDislike(dislike - 1);
      // sinon disliker
    } else {
      setIsDisliked(true);
      setDislike(like + 1);
      // si le film était liké, désactiver le like, dislike+1 et like-1
      if (isLiked) {
        setIsLiked(false);
        setDislike(dislike + 1);
        setLike(like - 1);
      }
    }
  };

  /**
   * Supprime un film
   */
  const handleDeleteMovie = (e) => {
    e.preventDefault()
    dispatch(deleteMovie(movie.id));
  };

  return (
    <div className="movie-card">
      <h2 className="movie-title">{movie.title}</h2>
      <div className="movie-categories-wrapper">
        <h3 className="movie-category">{movie.category}</h3>
      </div>
      <div className="reaction-wrapper">
        <div className="like-wrapper">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={isLiked ? "icon_thumbs_up_liked" : "icon_thumbs_up"}
            onClick={() => isLinking()}
            title="Liker ce film"
          />
          <small className="total-reaction">{like}</small>
        </div>
        <div className="dislike-wrapper">
          <FontAwesomeIcon
            icon={faThumbsDown}
            className={
              isDisliked ? "icon_thumbs_down_disliked" : "icon_thumbs_down"
            }
            onClick={() => isDislinking()}
            title="Disliker ce film"
          />
          <small className="total-reaction">{dislike}</small>
        </div>
      </div>
      <button className="btn-delete-movie" onClick={(e) => handleDeleteMovie(e)}>
        supprimer <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Movie;
