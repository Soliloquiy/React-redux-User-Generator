import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => response.json())
    .catch((error) => {throw error})
}


//function is used to call api and set new actions
// and payloads that are not in actions folder
function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: 'GET_USERS_SUCCESS', users: users});
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message });
  }
}

//function will watch for every time getUsers action
// is dispatched

function* userSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;