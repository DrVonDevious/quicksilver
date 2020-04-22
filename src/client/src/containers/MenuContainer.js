import React from 'react';
import { useSelector } from 'react-redux';

import MenuBar from '../components/MenuBar';
import MenuButton from '../components/MenuButton';

const MenuContainer = () => {

  const menuState = useSelector(state => state.menu.menuState);

  return (
    <div className="menu-container">
      { menuState ? <MenuBar /> : <MenuButton /> }
    </div>
  );
};

export default MenuContainer;
