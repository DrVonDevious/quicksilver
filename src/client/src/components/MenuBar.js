import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/MenuBar.css';

import { toggleMenu } from '../reducers/menuReducer';
import { toggleCode, updateCSS, updateJS, updateHTML } from '../reducers/codeReducer';
import { toggleSaveForm } from '../reducers/saveReducer';
import { toggleLoad } from '../reducers/loadReducer';

const MenuBar = () => {

  const dispatch = useDispatch();

  const userState = useSelector(state => state.user);

  const clearCode = () => {
    dispatch(updateJS(""));
    dispatch(updateCSS(""));
    dispatch(updateHTML(""));
  };

  return (
    <div className="menu-bar">
      <button key="1" onClick={() => dispatch(toggleMenu())}>Close Menu</button>
      <button key="2" onClick={() => dispatch(toggleCode())}>Show Code</button>
      <button key="3" onClick={() => clearCode()}>Clear Component</button>
      <button key="4" onClick={() => dispatch(toggleLoad())}>Load Component</button>
      { userState.currentUser ? [
        <button key="5" onClick={() => dispatch(toggleSaveForm())}>Save Component</button>
      ] : null }
    </div>
  );
};

export default MenuBar;
