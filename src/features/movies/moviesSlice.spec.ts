import moviesReducer, {
  MoviesState,
  setMovies,
  setCategories,
  addLike,
} from "./moviesSlice";

describe("movie reducer", () => {
  const initialState: MoviesState = {
    movies: [],
    categories: [],
    filteredMovieIds: [],
    selectedCategories: [],
    page: {
      currentPage: 1,
      moviesPerPage: 4,
    },
  };

  it("should handle initial state", () => {
    expect(moviesReducer(undefined, { type: "unknown" })).toEqual(initialState);
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

  it("should handle addLike", () => {
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

    const actual = moviesReducer({ ...initialState, movies }, addLike("1"));
    expect(actual.movies[0].likes).toEqual(1);
  });

  it("should handle addDislike", () => {
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

    const actual = moviesReducer({ ...initialState, movies }, addLike("1"));
    expect(actual.movies[0].likes).toEqual(1);
  });
});
