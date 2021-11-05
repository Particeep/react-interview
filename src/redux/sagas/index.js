import { all } from 'redux-saga/effects'

import movieSagas from './movieSagas'

export default function* rootSaga() {
    yield all([
      ...movieSagas
    ])
}
