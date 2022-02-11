import * as type from '../types';


//Step 5: Create action with type and payload that will
// be dispatched in component.

export function depositMoney(amount) {
  return {
      type: type.DEPOSIT,
      payload: amount
    }
}

export function withdrawMoney(amount) {
  return {
      type: type.WITHDRAW,
      payload: amount
    }
}