import React from 'react';
import { useDispatch } from 'react-redux';

import '../css/MenuBar.css';

import { toggleMenu } from '../reducers/menuReducer';
import { toggleCode } from '../reducers/codeReducer';

const MenuBar = () => {

  const dispatch = useDispatch();

  return (
    <div className="menu-bar">
      <button onClick={() => dispatch(toggleMenu())}>Close Menu</button>
      <button onClick={() => dispatch(toggleCode())}>Show Code</button>
    </div>
  );
};

export default MenuBar;
