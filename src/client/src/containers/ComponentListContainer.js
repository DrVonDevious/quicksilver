import React from 'react';

import ComponentItem from '../components/ComponentItem';
import SearchBar from '../components/SearchBar';

const ComponentListContainer = () => {
  return (
    <div className="component-list">
      <SearchBar />
      <ComponentItem />
    </div>
  );
};

export default ComponentListContainer;
