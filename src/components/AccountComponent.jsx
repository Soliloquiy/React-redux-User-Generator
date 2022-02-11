import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withdrawMoney } from '../redux/actions/account';
import { depositMoney } from '../redux/actions/account';

//Step 6: Use a selector to view the state
// Use a dispatch to dispatch action

const Account = () => {
const account = useSelector(state => state.account.account)
const dispatch = useDispatch();




console.log(account)
  return (
    
    <div>
      <h1>{account}</h1>
      <button onClick={() => {dispatch(depositMoney(1000))}}> Deposit </button>
      <button onClick={() => {dispatch(withdrawMoney(1000))}}> Withdraw </button>
    </div>
  )
}

export default Account;