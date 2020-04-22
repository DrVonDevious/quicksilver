import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../reducers/menuReducer';
const MenuButton = () => {

  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleMenu())}>Open Menu</button>
  );
};

export default MenuButton;
