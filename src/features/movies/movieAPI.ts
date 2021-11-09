import { movies$ } from '../../movies';

export const getMovies = async () => {
    return await movies$;
}