import React from 'react';

import './App.scss';


import MovieList from './components/MovieList/MovieList';
import useListMovies from './hooks/useListMovies';
import CategoriesList from './components/CatgeoriesList/CategoriesList';
import Pagination from './components/Pagination/Pagination';
import PaginationSettings from './components/PaginationSettings/PaginationSettings';
function App() {
  useListMovies(true);
  return (

    <div className="App">
        <h1 className='App__title'>Movies</h1>
        <div className='App__filter'>
        <CategoriesList/>
        <PaginationSettings/>
        </div>
        <div className='App__movies-list'>
        <MovieList/>
        </div>
        <Pagination />
    </div>

  );
}

export default App;
