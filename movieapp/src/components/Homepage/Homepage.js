import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer';
import Filter from '../Filter/Filter';
import { getFilteredMovies } from '../../selectors/movies';


const Homepage = () => {

  const movies = useSelector(getFilteredMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);
  const indexOfLastMovies = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovies - moviesPerPage;

  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovies);
  
  const paginate = (number) => setCurrentPage(number);
  return (
    <>
    <Navbar/>
    <Filter/>
    <div className="movie__container">
     {currentMovies.map((movie) => <Card key={movie.id} {...movie}/>)}
    </div>
    <Pagination moviesPerPage={moviesPerPage} 
      totalPosts={movies.length}
      paginate={paginate} />
    <Footer/>
      </>
  );
}
export default Homepage;
