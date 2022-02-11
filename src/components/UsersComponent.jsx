import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from './CardComponent';

const Users = () => {
  //dispatch is handled by the component
  const dispatch = useDispatch();
  //selectors are used to grab the state from reducer
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return (
    <>
      {loading && <p>Loading...</p>}
      {users.length > 0 && users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
    </>
  )
}

export default Users;