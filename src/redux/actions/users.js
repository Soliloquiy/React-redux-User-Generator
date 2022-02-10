import * as type from '../types';

//action is used to contain the type of action and the
//payload for the action
//action is dispatched inside component
export function getUsers(users) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users,
  }
}