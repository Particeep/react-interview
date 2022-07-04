import React from "react";

import "./MoviesList.css";
import Movie from "./Movie";

/**
 * Représente la liste des films
 */
const MoviesList = ({ moviesList }) => {
  return (
    <>
      <section className="movies-container">
        <div className="movies-wrapper">
          {moviesList.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MoviesList;
