import React from 'react';
import { useDispatch } from 'react-redux';
import { filterComponents } from '../reducers/loadReducer';

const SearchBar = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <input onChange={(e) => dispatch(filterComponents(e.target.value))} type="text" />
    </div>
  );
};

export default SearchBar;
