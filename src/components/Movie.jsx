import React from "react";
import LazyLoad from "react-lazyload"; // Lazy-loading for a better performance

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faTag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as farThumbsUp,
  faThumbsDown as farThumbsDown,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";

import { notify } from "../utils/Notification"; // Notifications

// Redux
import {
  filter_movies,
  like_movie,
  unlike_movie,
  dislike_movie,
  undislike_movie,
  remove_movie,
} from "../redux/moviesSlice";

import { change_page } from "../redux/pagesSlice";

const Movie = ({ movie, filteredMovies }) => {
  const dispatch = useDispatch();
  const { indexOfFirstItem, indexOfLastItem, currentPage } = useSelector(
    (state) => state.pages
  );
  const { liked, disliked } = useSelector((state) => state.movies);
  const { id, title, img, category, likes, dislikes } = movie;

  // Undislikes already-disliked movie otherwise likes it.
  const handleLike = (id) => {
    disliked.includes(id)
      ? dispatch(undislike_movie(id))
      : dispatch(like_movie(id));
  };

  const handleUnlike = (id) => {
    dispatch(unlike_movie(id));
  };

  // Unlikes already-liked movie otherwise dislikes it.
  const handleDislike = (id) => {
    liked.includes(id)
      ? dispatch(unlike_movie(id))
      : dispatch(dislike_movie(id));
  };

  const handleUndislike = (id) => {
    dispatch(undislike_movie(id));
  };

  const handleRemove = (id) => {
    dispatch(remove_movie(id));
    notify(`${title} has been removed.`);

    // Reset filter to "all" if last movie of category removed or go to previous page if page has no more elements.
    if (
      filteredMovies.slice(indexOfFirstItem, indexOfLastItem).length === 1 &&
      filteredMovies.length > 1
    ) {
      dispatch(change_page(currentPage - 1));
    }
    if (filteredMovies.length === 1) dispatch(filter_movies(null));
  };

  const convert = (value) => (value / 1000).toFixed(0) + "k";

  // Like-Dislike ratio
  const ratio = ((likes / (likes + dislikes)).toFixed(3) * 100)
    .toString()
    .substring(0, 4);

  return (
    <div className="movie-card">
      <div className="movie-image">
        {/*         <LazyLoad height={690} offset={100}> */}
        <img
          className="movie-cover"
          title={title}
          src={`/images/${img}`}
          alt={title}
        />
        {/*    </LazyLoad> */}
        <div className="movie-overlay">
          <span className="icon-container">
            <FontAwesomeIcon
              data-testid="remove-movie"
              icon={faTrashAlt}
              size="2x"
              title="Remove"
              onClick={() => {
                handleRemove(id);
              }}
            />
          </span>

          <span className="icon-container">
            <FontAwesomeIcon icon={faStar} size="2x" title="Ratio" />
            <small className="icon-text">{ratio}%</small>
          </span>
        </div>
      </div>

      <div className="movie-text">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-category">
          <FontAwesomeIcon icon={faTag} title="Category" />
          {category}
        </p>
      </div>

      <div className="movie-ratings">
        <span>
          {/* If movie has been previously liked -> Unlike it otherwise Like it.*/}
          <FontAwesomeIcon
            data-testid={liked.includes(id) ? "unlike-movie" : "like-movie"}
            className={`dispatch-icon ${liked.includes(id) ? "pressed" : ""}`}
            icon={liked.includes(id) ? faThumbsUp : farThumbsUp}
            size="2x"
            title={liked.includes(id) ? "Unlike" : "Like"}
            onClick={() => {
              liked.includes(id) ? handleUnlike(id) : handleLike(id);
            }}
          />

          <small className="icon-text">
            {likes >= 1000 ? convert(likes) : likes}
          </small>
        </span>

        <span>
          {/* If movie has been previously disliked -> Undislike it otherwise Dislike it.*/}
          <FontAwesomeIcon
            data-testid={
              disliked.includes(id) ? "undislike-movie" : "dislike-movie"
            }
            className={`dispatch-icon ${
              disliked.includes(id) ? "pressed" : ""
            }`}
            icon={disliked.includes(id) ? faThumbsDown : farThumbsDown}
            size="2x"
            title={disliked.includes(id) ? "Undislike" : "Dislike"}
            onClick={() => {
              disliked.includes(id) ? handleUndislike(id) : handleDislike(id);
            }}
          />

          <small className="icon-text">
            {dislikes >= 1000 ? convert(dislikes) : dislikes}
          </small>
        </span>
      </div>
    </div>
  );
};

export default Movie;
