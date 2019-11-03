import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());

    console.log('json', json)
  yield put({ type: "user_RECEIVED", json: json});
}

function* fetchPosts() {

  const jsonPost = yield fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());

    console.log('json', jsonPost)
  yield put({ type: "post_RECEIVED", post: jsonPost});
}

function* actionWatcher() {
  yield takeLatest('GET_USERS', fetchNews)
  yield takeLatest('GET_POSTS', fetchPosts)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}