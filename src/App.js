import React, { useEffect } from "react";
import PaginationComponent from './components/Pagination';
import Header from './components/Header'
import {movies$} from './movies'
import {connect} from 'react-redux';
import {loadMovies} from './redux/actions/movies'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App(props) {

  const fetchMovies = () => {
    movies$.then((json) => props.loadmovies(json));  
  }
  useEffect(() => { 
    fetchMovies();
  },[]);

  return (
    <div>
     
      <Header />
      <PaginationComponent />
     
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
      loadmovies: (movies) => dispatch(loadMovies(movies)),
 }
}
export default connect(null,mapDispatchToProps)(App);
