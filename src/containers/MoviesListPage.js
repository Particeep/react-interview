import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { movies$ } from '../movies';
import MoviesList from '../components/MoviesList';
import MoviesFilter from '../components/MoviesFilter';
import { addMovies, deleteMovie, setCategories } from '../store/actions';

const MoviesListPage = ({ addMovies, deleteMovie, setCategories, moviesList, categoriesList }) => {
    // const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        movies$.then(movies => { 
            addMovies(movies);
            setCategories(movies);
        });
    }, []);


    useEffect(() => {
        setCategories(moviesList);
    }, [moviesList]);

    return (
        <div id="main">
            <MoviesFilter categories={ categoriesList } />
            < MoviesList movies={ moviesList } />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        moviesList: state.moviesList,
        categoriesList: state.categoriesList
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        addMovies: bindActionCreators(addMovies, dispatch),
        deleteMovie: bindActionCreators(deleteMovie, dispatch),
        setCategories: bindActionCreators(setCategories, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(MoviesListPage);