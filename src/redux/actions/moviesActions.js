/**
 * Chaque action décrit le type d'action et le payload (contenu des nouvelles données)
 */
import { movies$ as movies } from "../../movies";
 import { GET_MOVIES, DELETE_MOVIE } from "../constants";

 export const GET_POSTS = 'GET_POSTS';

 
 /**
  * action qui récupère les films et les envoie au reducer
  * le reducer va ensuite modifier l'état actuel du store
  */
 export const getMovies = (moviesData) => {
   // dispatch : ce que l'on envoie au reducer
   return (dispatch) => {
    if (moviesData) {
      dispatch({type: GET_MOVIES, payload: moviesData})
    } else {
      movies.then((data) => {
        dispatch({type: GET_MOVIES, payload: data})
      })
    }
  };
 };
 
 
 /**
  * action qui supprime un film et l'envoie au reducer
  * le reducer va ensuite modifier l'état actuel du store
  * @param  {movieId} : représente l'id du film à envoyer au reducer pr màj le store
  */
 export const deleteMovie = (movieId) => {
   return (dispatch) => {
    dispatch({type: DELETE_MOVIE, payload: {movieId}})
   };
 };