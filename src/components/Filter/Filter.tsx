import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store';

import { filter } from '../../store/mainSlice';
import styles from './Filter.module.scss';

const Filter = () => {
  const categories = useAppSelector((state: RootState) => state.main.categories)
  const dispatch = useAppDispatch();

  function handleFilter(e: any) {
    dispatch(filter(e.target.value));
  }

  return (
    <div className={styles.selectContainer}>
      <label htmlFor="category">Filter by category</label>
      <select defaultValue='choose' name="category" id="category" onChange={ (e) => handleFilter(e) }>
        <option value='choose' disabled>Choose</option>
        <option value='all'>All</option>
        { 
          categories?.map(category => <option key={ category } value={ category }>{ category }</option>)
        }
      </select>
    </div>
  );
};

export default Filter;