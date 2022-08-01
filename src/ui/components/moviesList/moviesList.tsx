import { MovieContainer, MovieWrapper } from './Styled';

import Card from '../card/Card';
import React from 'react';

const MoviesList = ({ moviesList }) => {
  return (
    <MovieContainer>
      <MovieWrapper>
        {moviesList.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </MovieWrapper>
    </MovieContainer>
  );
};

export default MoviesList;
