import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUsers } from '../reducers/userReducer';
import CanvasContainer from '../containers/CanvasContainer';
import MenuContainer from '../containers/MenuContainer';
import CodeBoxContainer from '../containers/CodeBoxContainer';
import SaveComponentContainer from '../containers/SaveComponentContainer';
import ComponentListContainer from '../containers/ComponentListContainer';

const MainContainer = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

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
      { state.code.codeState ? <CodeBoxContainer /> : null }
      { state.save.saveFormState ? <SaveComponentContainer /> : null }
      { state.load.loadState ? <ComponentListContainer /> : null }
      <MenuContainer />
    </div>
  )
};

export default MainContainer;
