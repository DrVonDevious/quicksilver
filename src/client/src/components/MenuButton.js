import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../reducers/menuReducer';
import "../css/MenuButton.css";

const MenuButton = () => {

  const dispatch = useDispatch();

  return (
    <button className="menu-btn" onClick={() => dispatch(toggleMenu())}>
      <svg class="menu-arrow bi bi-caret-up-fill" width="4em" height="4em" viewBox="0 0 16 16" fill="rgba(0, 0, 0, 0.6)" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z"/>
      </svg>
    </button>
  );
};

export default MenuButton;
