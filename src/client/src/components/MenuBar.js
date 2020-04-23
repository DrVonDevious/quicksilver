import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/MenuBar.css';

import { toggleMenu } from '../reducers/menuReducer';
import { toggleCode, updateCSS, updateJS, updateHTML } from '../reducers/codeReducer';

const MenuBar = () => {

  const dispatch = useDispatch();

  const clearCode = () => {
    dispatch(updateJS(""));
    dispatch(updateCSS(""));
    dispatch(updateHTML(""));
  };

  return (
    <div className="menu-bar">
      <button onClick={() => dispatch(toggleMenu())}>Close Menu</button>
      <button onClick={() => dispatch(toggleCode())}>Show Code</button>
      <button onClick={() => clearCode()}>Clear Component</button>
    </div>
  );
};

export default MenuBar;
