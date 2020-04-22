import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../reducers/userReducer';

import CanvasContainer from '../containers/CanvasContainer';
import MenuContainer from '../containers/MenuContainer';
import CodeBoxContainer from '../containers/CodeBoxContainer.js';

const MainContainer = () => {

  const dispatch = useDispatch();
  const codeState = useSelector(state => state.code.codeState);

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
      <CanvasContainer />
      { codeState ? <CodeBoxContainer /> : null }
      <MenuContainer />
    </div>
  )
};

export default MainContainer;
