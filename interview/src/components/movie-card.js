import React from 'react';

function MovieCard({
  id,
  title,
  category,
  likes,
  dislikes,
  onDelete,
  onLike,
  onDislike,
}) {
  return (
    <div className="movie_card">
      <h1 className="movie_card__title">{title}</h1>
      <div className="movie_card__category">{category}</div>
      <div className="movie_card__bar">
        <div className="icon_like" onClick={onLike(id)} />
        <div className="icon_label">{likes}</div>
        <div className="icon_dislike" onClick={onDislike(id)} />
        <div className="icon_label">{dislikes}</div>
      </div>
      <div className="movie_card__buttons">
        <button
          className="movie_card__buttons btn_delete"
          onClick={onDelete(id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
