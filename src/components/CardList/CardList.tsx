import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setEndOfNext } from '../../store/mainSlice';

import Card from '../Card/Card';
import styles from './CardList.module.scss';
import { Movie } from '../../interfaces';

const CardList = () => {
  const dispatch = useAppDispatch();

  const movies = useAppSelector(state => state.main.movies);
  const isLastMovie = useAppSelector(state => state.main.isLastMovie);
  const moviesPerPage = useAppSelector(state => state.main.moviesPerPage);
  const currentPage = useAppSelector(state => state.main.currentPage);
  const selectedCategory = useAppSelector(state => state.main.selectedCategory);

  const firstMovie = currentPage === 1 ? 0 : (currentPage - 1) * moviesPerPage;
  const lastMovie = firstMovie + moviesPerPage
  let moviesToDisplay;
  
  if (selectedCategory === 'all') {
    moviesToDisplay = movies?.slice(firstMovie , lastMovie);
  } else {
    moviesToDisplay = movies?.filter((movie: Movie) => movie.category === selectedCategory)
                            .slice(firstMovie, lastMovie);
  };

  useEffect(() => {
    dispatch(setEndOfNext());
  });

  return (        
    <div className={styles.listContainer}>
      { 
        !isLastMovie ? (
          moviesToDisplay?.map(el => {
            return (
              <Card 
                key={ el.id }
                id={ el.id }
                title={ el.title }
                image={ el.image }
                category={ el.category }
                likes={ el.likes }
                dislikes={ el.dislikes }
                liked={el.liked ? el.liked : null}
                disliked={el.disliked ? el.disliked : null}
              />
            )
          }) 
        ) : (
          <p className={styles.noMovies}>You deleted all movies...</p>
        )
      }
    </div>
  );
};

export default CardList;