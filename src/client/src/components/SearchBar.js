import React from 'react';
import { useDispatch } from 'react-redux';
import { filterComponents } from '../reducers/loadReducer';
import '../css/ComponentListContainer.css';

const SearchBar = () => {

  const dispatch = useDispatch();

  return (
    <div className="search-container">
      <input className="search-bar" onChange={(e) => dispatch(filterComponents(e.target.value))} type="text" />
    </div>
  );
};

export default SearchBar;
