import { put, takeLatest, all } from "react-saga/effects";

function* fetchNews() {
  const json = yield fetch(
    "https://newapi.org/vl/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  ).then((response) => response.json());

  yield put({ type: "NEWS_RECEIVED", json: json.articles });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
