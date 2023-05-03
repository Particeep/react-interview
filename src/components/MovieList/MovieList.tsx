import React, { useEffect } from "react";

import useListMovies from "../../hooks/useListMovies";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieList.scss";

export default function MovieList() {
  const {
    movieListFiltred,
    movieListReducer,
    movieLikedList,
    addMovieInMovieLikedList,
    removeMovieInMovieLikedList,
    deleteMovie,
  } = useListMovies(false);
  const { isLoading } = movieListReducer;


  return (
    <div className="movie-list">
      <div className="movie-list__wrapper">
        {isLoading
          ? "...loading"
          : movieListFiltred &&
            movieListFiltred.map((movie) => {
              const { id, title, category, likes, dislikes } = movie;

              const isLiked = movieLikedList.includes(movie.id);
              const handleClickLike = () => {
                if (isLiked) {
                  removeMovieInMovieLikedList(movie.id);
                } else {
                  addMovieInMovieLikedList(movie.id);
                }
              };

              const handleClickRemoveMovie = () => {
                deleteMovie(movie);
              };

              return (
                <MovieCard
                  key={id}
                  title={title}
                  category={category}
                  likesPourcentage={Math.floor(
                    (likes / (likes + dislikes)) * 100
                  )}
                  handleClickLike={handleClickLike}
                  isLiked={isLiked}
                  handleClickRemoveMovie={handleClickRemoveMovie}
                />
              );
            })}
      </div>
    </div>
  );
}
