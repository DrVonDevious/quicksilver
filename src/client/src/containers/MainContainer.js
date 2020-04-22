import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../reducers/userReducer';

const MainContainer = () => {

  const dispatch = useDispatch();

  // fetches all the users that exist in our database
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(res => res.json())
      .then(users => {
        dispatch(setUsers(users));
      })
  }, []);

  return (
    <div>
    </div>
  )
};

export default MainContainer;
