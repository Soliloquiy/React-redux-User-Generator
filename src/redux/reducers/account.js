import * as type from '../types';

//STEP 1: Create reducers which handles all mutations
// to state.

//State is contained in reducer

const initialState = {
  account: 0
}

//Reducer mutates the state based on the action.
//It will cycle through the different types and match
// the reducer to the action based on the type

//Switch statement is used to handle the different types
export default function account(state = initialState, action) {
  //inside switch statement, utilize action.(payload)
  //that is obtained from sagas
  switch(action.type) {
    case type.DEPOSIT:
      return {
        ...state,
        account: state.account + action.payload
      }
      
    case type.WITHDRAW:
      return {
        ...state,
        account: state.account - action.payload
      }
    default:
      return state;
  }
}