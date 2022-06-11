import React from "react";

import { useAppSelector } from "../../app/hooks";
import { selectMovies, StatusEnum } from "./moviesSlice";
import "./Movies.scss";
import { Movie } from "../Movie/Movie";

export const Movies = () => {
  const { movies, status } = useAppSelector(selectMovies);

  if (status === StatusEnum.LOADING) {
    return <p>Loading....</p>;
  }

  return (
    <div className="main">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
