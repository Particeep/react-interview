import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { movies$ } from '../movies';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from '../components/Header';
import MoviesFilter from '../components/MoviesFilter';
import MoviesList from '../components/MoviesList';
import Pagination from '../components/Pagination';
import { 
    addMovies, 
    deleteMovie,
    setAllMovies, 
    setAllCategories,
    addLike,
    deleteLike,
    addDislike,
    deleteDislike,
    setPageNumbers,
    paginate,
    nextPage,
    prevPage,
    setMoviesPerPage
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
    setPageNumbers,
    paginate,
    nextPage,
    prevPage,
    moviesList, 
    allMoviesList,
    categoriesList,
    pageNumbers,
    currentPage,
    moviesPerPage
}) => {

    useEffect(() => {
        movies$.then(movies => {
            addMovies(movies);
            setAllMovies(movies);
            setAllCategories(movies);
            setMoviesPerPage(12);
        });
    }, []);
    
    useEffect(() => {
        setPageNumbers(moviesList.length, moviesPerPage);
    }, [moviesList])

    return (
        <div id='site'>
            <Header />
            <div id="main">
                <MoviesFilter 
                    categories={categoriesList} 
                    movies={allMoviesList} 
                />
                <MoviesList 
                    movies={moviesList}
                    moviesPerPage={moviesPerPage}
                    currentPage={currentPage}
                    deleteMovie={deleteMovie} 
                    addLike={addLike}
                    deleteLike={deleteLike}
                    addDislike={addDislike}
                    deleteDislike={deleteDislike}
                />
            </div>
            <span id="pagination-bloc">
                <DropdownButton title="Pagination" onSelect={(e) => setMoviesPerPage(12)}>
                    <Dropdown.Item eventKey={1}>{4}</Dropdown.Item>
                    <Dropdown.Item eventKey={2}>{8}</Dropdown.Item>
                    <Dropdown.Item eventKey={3}>{12}</Dropdown.Item>
                </DropdownButton>
                <Pagination 
                    pageNumbers={pageNumbers}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        moviesList: state.moviesList,
        categoriesList: state.categoriesList,
        allMoviesList: state.allMoviesList,
        pageNumbers: state.pageNumbers,
        moviesPerPage: state.moviesPerPage,
        currentPage: state.currentPage
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
        deleteDislike: bindActionCreators(deleteDislike, dispatch),
        setPageNumbers: bindActionCreators(setPageNumbers, dispatch),
        paginate: bindActionCreators(paginate, dispatch),
        nextPage: bindActionCreators(nextPage, dispatch),
        prevPage: bindActionCreators(prevPage, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(MoviesListPage);