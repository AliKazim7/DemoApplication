import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());

    console.log('json', json)
  yield put({ type: "user_RECEIVED", json: json});
}

function* actionWatcher() {
  yield takeLatest('GET_USERS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}