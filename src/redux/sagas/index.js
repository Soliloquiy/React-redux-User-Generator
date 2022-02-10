import {  all } from 'redux-saga/effects';
import userSaga from './usersSaga';

//Combine all sagas
export default function* rootSaga() {
  yield all([
    userSaga(),
  ])
}