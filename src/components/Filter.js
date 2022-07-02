import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filter } from '../store/mainSlice';
import styles from './Filter.module.scss';

const Filter = () => {
  const movies = useSelector(state => state.main.movies)
  const dispatch = useDispatch();

  const categories = [...new Set(movies.map(movie => movie.category))]

  function handleChange(e) {
    console.log(e.target.value)

    dispatch(filter(e.target.value));
  }

  return (
    <div className={styles.selectContainer}>
      <label htmlFor="category">Filter by category</label>
      <select defaultValue='choose' name="category" id="category" onChange={ (e) => handleChange(e) }>
        <option value='choose' disabled>Choisissez</option>
        <option value='All'>Toutes</option>
        { 
          categories.map(category => <option key={ category } value={ category }>{ category }</option>)
        }
      </select>
    </div>
  );
};

export default Filter;