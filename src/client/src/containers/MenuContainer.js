import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../reducers/menuReducer';

import MenuBar from '../components/MenuBar';
import MenuButton from '../components/MenuButton';

const MenuContainer = () => {

  const menuState = useSelector(state => state.menu.menuState);
  const dispatch = useDispatch();

  return (
    <div className="menu-container">
      { menuState ? <MenuBar /> : <MenuButton /> }
    </div>
  );
};

export default MenuContainer;
