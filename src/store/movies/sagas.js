import { categories, deleteMovie, movies$ } from "../../data/movies";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  deleteMovieFailure,
  deleteMovieSuccess,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
  fetchMoviesFailure,
  fetchMoviesSuccess,
} from "./actions";
import {
  DELETE_MOVIE_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  FETCH_MOVIES_REQUEST,
} from "./actionTypes";

function* fetchMoviesSaga(action) {
  const { payload } = action;
  const categories = payload?.categories ?? [];

  try {
    const response = yield call(() => movies$({ categories }));
    yield put(
      fetchMoviesSuccess({
        movies: response,
      })
    );
  } catch (e) {
    yield put(
      fetchMoviesFailure({
        error: e.message,
      })
    );
  }
}

function* deleteMovieRequestSaga(action) {
  const {
    payload: { id, selectedCategories },
  } = action;
  try {
    const response = yield call(() => deleteMovie(id, selectedCategories));
    yield put(
      deleteMovieSuccess({
        movies: response,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      deleteMovieFailure({
        error: e.message,
      })
    );
  }
}

function* fetchCategorieseRequestSaga() {
  try {
    const response = yield call(() => categories());
    yield put(
      fetchCategoriesSuccess({
        categories: response,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      fetchCategoriesFailure({
        error: e.message,
      })
    );
  }
}

function* moviesSaga() {
  yield all([
    takeLatest(FETCH_MOVIES_REQUEST, fetchMoviesSaga),
    takeLatest(DELETE_MOVIE_REQUEST, deleteMovieRequestSaga),
    takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategorieseRequestSaga),
  ]);
}

export default moviesSaga;
