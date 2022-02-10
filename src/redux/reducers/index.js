import { combineReducers } from 'redux';
import users from './users';

//reducer index is used to contain all reducers
const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;