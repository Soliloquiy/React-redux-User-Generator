import * as type from '../types';

//State is contained in reducer
const initialState = {
  users: [],
  loading: false,
  error: null,
}

//Reducer mutates the state based on the action
//Switch statement is used to handle the different cases

//No action.payload as it is receiving data from the saga
// which uses action.users, and action.message instead
export default function users(state = initialState, action) {
  switch(action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      }
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state;
  }
}