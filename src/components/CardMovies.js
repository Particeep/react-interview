import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as faThumbsUpRegular,
  faThumbsDown as faThumbsDownRegular,
} from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faThumbsUp, faThumbsDown, faThumbsDownRegular, faThumbsUpRegular);

export default function CardMovies({ movies, movie, setMovies, setMovieByCategory, movieByCategory }) {
  const { id, title, category, image } = movie;

  const [likes, setLikes] = useState(movie.likes);
  const [dislikes, setDislikes] = useState(movie.dislikes);
  const [liking, setLiking] = useState(false);
  const [disliking, setDisliking] = useState(false);

  useEffect(() => {
    setLikes(movie.likes);
    setDislikes(movie.dislikes);
  }, [movie]);

  const addLike = (likes) => {
    if (liking === false) {
      setLikes(likes + 1);
      setLiking(true);
      setDisliking(false);
    }
    if (disliking === true) {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
    }
  };

  const addDislike = (dislikes) => {
    if (disliking === false) {
      setDislikes(dislikes + 1);
      setDisliking(true);
      setLiking(false);
    }
    if (liking === true) {
      setDislikes(dislikes + 1);
      setLikes(likes - 1);
    }
  };

  const removeMovie = (movie) => {
    const newMovies = movies.filter((item) => item.id !== movie.id);
    if (movieByCategory) {
      setMovieByCategory(newMovies);
    }
    setMovies(newMovies);
  };

  return (
    <div className="mainCard">
      <FontAwesomeIcon color="white" className="remove" onClick={() => removeMovie(movie)} icon={faTimes} />

      <img className="imageMovie" src={image} alt="" />

      <h1 className="title">{title}</h1>
      <h3 className="category">{category}</h3>

      <div className="likeContainer">
        <div className="likes">
          <FontAwesomeIcon
            className="like-dislike"
            onClick={() => addLike(likes)}
            icon={liking ? ["fas", "thumbs-up"] : ["far", "thumbs-up"]}
          />
          <p> {likes} </p>
        </div>
        <div className="dislikes">
          <FontAwesomeIcon
            className="like-dislike"
            onClick={() => addDislike(dislikes)}
            icon={disliking ? ["fas", "thumbs-down"] : ["far", "thumbs-down"]}
          />
          <p> {dislikes} </p>
        </div>
      </div>
      <ProgressBar likes={likes} dislikes={dislikes} />
    </div>
  );
}
