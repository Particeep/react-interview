import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Paginate.module.scss';
import { setMoviesPerPage, setCurrentPage } from '../store/mainSlice';

const Paginate = () => {
  const dispatch = useDispatch();
  const endOfNext = useSelector(state => state.main.endOfNext)
  const currentPage = useSelector(state => state.main.currentPage)

  const handleMoviesPerPage = (e) => {
    dispatch(setMoviesPerPage(+e.target.value));
  }

  const handleCurrentPage = (value) => {
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
        <input onChange={ handleMoviesPerPage } id='nbMovies' type="number" defaultValue='4' step='4' min='4' max='12'/>
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