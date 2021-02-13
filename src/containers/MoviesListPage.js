import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { movies$ } from '../movies';
import MoviesList from '../components/MoviesList';
import MoviesFilter from '../components/MoviesFilter';
import { addMovies, deleteMovie } from '../store/actions';

const MoviesListPage = ({ addMovies, deleteMovie, moviesList }) => {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        movies$.then(movies => { 
            addMovies(movies);
            setCategories([ ...new Set(movies.map(movie => movie.category))]);
        });
    }, []);


    useEffect(() => {
        setCategories([ ...new Set(moviesList.map(movie => movie.category))]);
    }, [moviesList]);

    return (
        <div id="main">
            <MoviesFilter categories={ categories } />
            < MoviesList movies={ moviesList } />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        moviesList: state.moviesList
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        addMovies: bindActionCreators(addMovies, dispatch),
        deleteMovie: bindActionCreators(deleteMovie, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(MoviesListPage);