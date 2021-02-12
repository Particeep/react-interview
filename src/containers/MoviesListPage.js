import { useEffect, useState } from 'react';
import { movies$ } from '../movies';
import MoviesList from '../components/MoviesList';
import MoviesFilter from '../components/MoviesFilter';

const MoviesListPage = () => {
    const [movies, updateMovies] = useState([]);
    const categories = ['Animation', 'Comedy', 'Drame', 'Horror', 'Thriller'];

    useEffect(() => {
        movies$.then(movies => { updateMovies(movies) });
        // Update de movies state and pass it to moviesList
    }, []);

    return (
        <div id="main">
            <MoviesFilter categories={ categories } />
            < MoviesList movies={ movies } />
        </div>
    )
}

export default MoviesListPage;