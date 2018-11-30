import React from "react";
import classes from "./movie.module.css";

function Movie({
  title,
  category,
  likes,
  dislikes,
  onLike,
  onDislike,
  onDelete
}) {
  return (
    <div className={classes.movie}>
      <button onClick={onDelete} className={classes.delete}>
        X
      </button>
      <div className={classes.title}>{title}</div>
      <div>{category}</div>
      <div className={classes.progress}>
        <progress value={likes} max={likes + dislikes} />
        <div className={classes.center}>
          <button className={classes.like} onClick={onLike}>
            Like
          </button>
          <button className={classes.like} onClick={onDislike}>
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
