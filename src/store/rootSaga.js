import { all, fork } from "redux-saga/effects";

import moviesSaga from "./movies/sagas";

export function* rootSaga() {
	yield all([fork(moviesSaga)]);
}
