import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../reducers/menuReducer';
import "../css/MenuButton.css";

const MenuButton = () => {

  const dispatch = useDispatch();

  return (
    <button className="menu-btn" onClick={() => dispatch(toggleMenu())}>Open Menu</button>
  );
};

export default MenuButton;
