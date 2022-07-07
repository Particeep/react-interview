import React from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import styles from './Paginate.module.scss';
import { setMoviesPerPage, setCurrentPage } from '../../store/mainSlice';

const Paginate = () => {
  const dispatch = useAppDispatch();
  const endOfNext = useAppSelector(state => state.main.endOfNext)
  const currentPage = useAppSelector(state => state.main.currentPage)
  const moviesPerPage = useAppSelector(state => state.main.moviesPerPage)

  const handleMoviesPerPage = (e: any) => {
    dispatch(setMoviesPerPage(+e.target.value));
  }

  const handleCurrentPage = (value: string) => {
    dispatch(setCurrentPage(value));
  } 

  return (
    <div className={styles.container}>
      <div 
        onClick={ () => handleCurrentPage('prev') }
        className={`${styles.button} ${currentPage === 1 ? styles.stop : ''}`}
      ><i className={`${styles.iconLeft} fa fa-angle-left`}></i>Previous</div>
      <div className={styles.nbMovies}>
        <label htmlFor="nbMovies">Movies per page</label>
        <input onChange={ handleMoviesPerPage } id='nbMovies' type="number" value={ moviesPerPage } step='4' min='4' max='12'/>
      </div>
      <div 
        onClick={ () => handleCurrentPage('next') }
        className={`${styles.button} ${endOfNext ? styles.stop : ''}`}
      >
        Next<i className={`${styles.iconRight} fa fa-angle-right`}></i>
        </div>
    </div>
  );
};

export default Paginate;