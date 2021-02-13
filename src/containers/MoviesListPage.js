import { useEffect, useState } from 'react';
import { movies$ } from '../movies';
import MoviesList from '../components/MoviesList';
import MoviesFilter from '../components/MoviesFilter';

const MoviesListPage = () => {
    const [movies, updateMovies] = useState([]);
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        movies$.then(movies => { 
            updateMovies(movies);
            setCategories([ ...new Set(movies.map(movie => movie.category))]);
        });
    }, []);


    useEffect(() => {
        setCategories([ ...new Set(movies.map(movie => movie.category))]);
    }, [movies]);

    return (
        <div id="main">
            <MoviesFilter categories={ categories } />
            < MoviesList movies={ movies } />
        </div>
    )
}

export default MoviesListPage;