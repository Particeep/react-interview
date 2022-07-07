import React, { useEffect } from 'react';

import styles from './App.module.scss';
import CardList from './components/CardList/CardList';
import Loader from './components/Loader/Loader';
import Filter from './components/Filter/Filter';
import Paginate from './components/Paginate/Paginate';
import { fetchMovies } from './store/actions';
import { useAppSelector, useAppDispatch } from './store/hooks';

const App = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.main.loading)

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MOVIES  APP</h1>
      { 
        loading ? (
          <Loader />
        ) : (
          <>
            <Filter />
            <CardList />
            <Paginate />
          </>
        )
      }
    </div>
  );
}

export default App;
