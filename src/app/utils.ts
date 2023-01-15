import { Category, Movie } from "./types";

// Merge like and dislike counts for duplicate movies
const mergeDuplicateMovies = (movies: Movie[]): Movie[] => {
  let uniqueMovies: Movie[] = [];
  movies.map((movie) => {
    const existingMovie = uniqueMovies.find((m) => m.title === movie.title);
    if (existingMovie) {
      uniqueMovies = uniqueMovies.filter((m) => m.title !== movie.title);
      uniqueMovies = [
        ...uniqueMovies,
        {
          ...existingMovie,
          likes: existingMovie.likes + movie.likes,
          dislikes: existingMovie.dislikes + movie.dislikes,
        },
      ];
    } else {
      uniqueMovies.push(movie);
    }
    return movie;
  });
  return uniqueMovies;
};

const filterByCategories = (movie: Movie, selectedCategories: Category[]) => {
  if (selectedCategories.length === 0) {
    return true;
  }
  return selectedCategories.includes(movie.category);
};

export { mergeDuplicateMovies, filterByCategories };
