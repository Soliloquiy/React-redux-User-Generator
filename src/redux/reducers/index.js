import { combineReducers } from 'redux';
import users from './users';
import account from './account';

//STEP 2: Combine all reducers

//reducer index is used to contain all reducers
const rootReducer = combineReducers({
  users: users,
  account: account,
});

export default rootReducer;