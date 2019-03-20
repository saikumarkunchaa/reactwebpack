import { takeEvery, put, call } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "DATA_ERROR" }, e);
  }
}

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/photos").then(response =>
    response.json()
  );
}
