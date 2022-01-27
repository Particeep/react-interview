import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { movies$ } from './api/movies';
import { useAppDispatch } from './redux/hooks';
import { initMovies } from './redux/store/moviesSlice';
import { loadData } from './utils/utils';
import Filters from './components/Filters';
import { initFilters } from './redux/store/filtersSlice';
import { categories$ } from './api/categories';
import MoviesList from './components/MoviesList';
import Pagination from './components/Pagination';

function App() {
  const dispatch = useAppDispatch();
  loadData(dispatch, initMovies, movies$); 
  loadData(dispatch, initFilters, categories$); 

  return (
    <div className="App">
      <header className="App-header">
        <meta name="description" content="This is a test for an interview." />
      </header>
      <Filters />
      <MoviesList />
      <Pagination />
    </div>
  );
}

export default App;
