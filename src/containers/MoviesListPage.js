import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { movies$ } from '../movies';
import MoviesList from '../components/MoviesList';
import MoviesFilter from '../components/MoviesFilter';
import { 
    addMovies, 
    deleteMovie,
    setAllMovies, 
    setAllCategories, 
} from '../store/actions';

const MoviesListPage = ({ 
    addMovies,
    setAllMovies, 
    setAllCategories, 
    deleteMovie, 
    moviesList, 
    allMoviesList,
    categoriesList,
}) => {

    useEffect(() => {
        movies$.then(movies => {
            addMovies(movies);
            setAllMovies(movies);
            setAllCategories(movies);
        });
    }, []);


    return (
        <div id="main">
            <MoviesFilter categories={ categoriesList } movies={ allMoviesList } />
            <MoviesList movies={ moviesList } deleteMovie={deleteMovie} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        moviesList: state.moviesList,
        categoriesList: state.categoriesList,
        allMoviesList: state.allMoviesList
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        addMovies: bindActionCreators(addMovies, dispatch),
        setAllCategories: bindActionCreators(setAllCategories, dispatch),
        setAllMovies: bindActionCreators(setAllMovies, dispatch),
        deleteMovie: bindActionCreators(deleteMovie, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(MoviesListPage);