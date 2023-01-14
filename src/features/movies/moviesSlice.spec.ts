import moviesReducer, {
  MoviesState,
  setMovies,
  setCategories,
} from "./moviesSlice";

describe("movie reducer", () => {
  const initialState: MoviesState = {
    movies: [],
    categories: [],
    filteredMovieIds: [],
    selectedCategories: [],
  };

  it("should handle initial state", () => {
    expect(moviesReducer(undefined, { type: "unknown" })).toEqual({
      movies: [],
      categories: [],
    });
  });

  it("should handle setMovies", () => {
    const movies = [
      {
        id: "1",
        title: "Movie 1",
        category: "Action",
        likes: 0,
        dislikes: 0,
      },
      {
        id: "2",
        title: "Movie 2",
        category: "Action",
        likes: 0,
        dislikes: 0,
      },
    ];

    const actual = moviesReducer(initialState, setMovies(movies));
    expect(actual.movies).toEqual(movies);
  });

  it("should handle setCategories", () => {
    const actual = moviesReducer(
      initialState,
      setCategories(["Action", "Comedy"])
    );
    expect(actual.categories).toEqual(["Action", "Comedy"]);
  });
});
