import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setComponents } from '../reducers/loadReducer';
import ComponentItem from '../components/ComponentItem';
import SearchBar from '../components/SearchBar';
import '../css/ComponentListContainer.css';

const ComponentListContainer = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchUserComponents = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/user_components", {
      headers: {
        "Authorization": `Bearer: ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        const components = data.filter(c => c.user_id === state.user.currentUser.id);
        dispatch(setComponents(components))
      })
  };

  useEffect(() => {
    if (state.user.currentUser) {
      fetchUserComponents();
    };
  }, []);

  return (
    <div className="component-list">
      <SearchBar />
      My Components:
      { state.load.components.map(c => (<ComponentItem component={c} key={(Math.random() * 1000)} />)) }
    </div>
  );
};

export default ComponentListContainer;
