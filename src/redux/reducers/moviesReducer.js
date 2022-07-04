import { GET_MOVIES, DELETE_MOVIE } from "../constants";

// State initialement égale à un tableau vide
const initialState = [];

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      // enregistrer les infos de films dans le localstorage pour conserver données
      localStorage.setItem(
        "movies",
        JSON.stringify({
          movies: action.payload,
        })
      );
      // on incrémente initial state avec la data de payload dispo pour l'ensemble des composants
      return action.payload;
    case DELETE_MOVIE:
      // retourner tous les films sauf celui que l'on supprime
      return state.filter((movie) => movie.id !== action.payload.movieId);
    default:
      return state;
  }
}

