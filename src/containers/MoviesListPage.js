import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { movies$ } from '../movies';
import Header from '../components/Header';
import MoviesFilter from '../components/MoviesFilter';
import MoviesList from '../components/MoviesList';
import { 
    addMovies, 
    deleteMovie,
    setAllMovies, 
    setAllCategories,
    addLike,
    deleteLike,
    addDislike,
    deleteDislike
} from '../store/actions';

const MoviesListPage = ({ 
    addMovies,
    setAllMovies, 
    setAllCategories, 
    deleteMovie,
    addLike,
    deleteLike,
    addDislike,
    deleteDislike,
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
        <div id='site'>
            <Header />
            <div id="main">
                <MoviesFilter 
                    categories={ categoriesList } 
                    movies={ allMoviesList } 
                />
                <MoviesList 
                    movies={ moviesList } 
                    deleteMovie={deleteMovie} 
                    addLike={addLike}
                    deleteLike={deleteLike}
                    addDislike={addDislike}
                    deleteDislike={deleteDislike}
                />
            </div>
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
        deleteMovie: bindActionCreators(deleteMovie, dispatch),
        addLike: bindActionCreators(addLike, dispatch),
        deleteLike: bindActionCreators(deleteLike, dispatch),
        addDislike: bindActionCreators(addDislike, dispatch),
        deleteDislike: bindActionCreators(deleteDislike, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(MoviesListPage);