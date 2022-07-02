/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.scss';
import CardList from './components/CardList';
import Loader from './components/Loader';
import Filter from './components/Filter';
import Paginate from './components/Paginate';
import { fetchMovies } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.main.moviesDisplayed)
  const moviesFiltered = useSelector(state => state.main.moviesFilteredToDisplay)
  const selectedCategory = useSelector(state => state.main.selectedCategory)
  let moviesToDisplay;

  if (selectedCategory !== 'All' && selectedCategory) {
    moviesToDisplay = moviesFiltered;
  } else {
    moviesToDisplay = movies;
  }

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className='container'>
      <h1>MOVIE  APP</h1>
      { 
        movies ? (
          <>
            <Filter />
            <CardList movies={ moviesToDisplay }/>
            <Paginate />
          </>
        ) : (
          <Loader />
        )
      }
    </div>
  );
}

export default App;
