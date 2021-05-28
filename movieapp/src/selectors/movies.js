export const getAllMovies = state => state.movieReducer.movies;

export const getAllMoviesCategories = state => state.movieReducer.movies
    .map((movie) => movie.category)
    .reduce((unique, category) => unique.includes(category) ? unique : [...unique, category], [])
    .sort((a, b) => {
        const textA = a.toUpperCase();
        const textB = b.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

export const getFilteredMovies = state => {
        const { movieReducer: { movies }, filters } = state;
        
        return movies.filter((movie) => {
            if(filters.category.length > 0) {
                return filters.category.includes(movie.category)
            }
        }).sort((a, b) => {
            const textA = a.category.toUpperCase();
            const textB = b.category.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    };
