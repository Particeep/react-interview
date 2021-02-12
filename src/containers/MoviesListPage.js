import { useEffect, useState } from 'react';
import { movies$ } from '../movies';
import MoviesList from '../components/MoviesList';
import MoviesFilter from '../components/MoviesFilter';

const MoviesListPage = () => {
    const [movies, updateMovies] = useState([]);
    
    useEffect(() => {
        movies$.then(movies => { updateMovies(movies) });
        // Update de movies state and pass it to moviesList
    }, []);

    return (
        <div>
            < MoviesList movies={ movies } />
        </div>
    )
}

export default MoviesListPage;