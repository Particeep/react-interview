import { call, put, takeLatest } from 'redux-saga/effects'
import {
  listMovies as listMoviesAction,
  listMoviesFailed as listMoviesFailedAction,
  listMoviesSucceed as listMoviesSucceedAction
} from '../reducers/movie'
import Api from '../../services/Api'
import { handleError } from '../../services/Error'

function* listMovies() {
  try {
    const movies = yield call(Api.getMovies)
    yield put(listMoviesSucceedAction(movies))
  }
  catch (exception) {
    console.warn(exception)
    yield put(listMoviesFailedAction(handleError(exception)))
  }
}

const sagas = [
  takeLatest(listMoviesAction.type, listMovies)
]

export default sagas