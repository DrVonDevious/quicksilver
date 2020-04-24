import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setComponents, resetComponents } from '../reducers/loadReducer';
import ComponentItem from '../components/ComponentItem';
import SearchBar from '../components/SearchBar';
import '../css/ComponentListContainer.css';

const ComponentListContainer = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchComponents = (isLibrary) => {
    const token = localStorage.getItem("token");
    var url = ""
    isLibrary ? (url = "library_components") : (url = "user_components");
    fetch("http://localhost:8080/" + url, {
      headers: {
        "Authorization": `Bearer: ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        const components = data;
        dispatch(resetComponents())
        if (!isLibrary) {
          components = data.filter(c => c.user_id === state.user.currentUser.id)
        };
        dispatch(setComponents(components))
      })
  };

  useEffect(() => {
    if (state.user.currentUser) {
      fetchComponents(true);
    };
  }, []);

  const handleSwitchList = (type) => {
    type === "lib" ? fetchComponents(true) : fetchComponents(false);
  };

  return (
    <div className="component-list">
      { state.user.currentUser ? [
        <button onClick={() => handleSwitchList("user")}>My Components</button>,
      ] : null }
      <button onClick={() => handleSwitchList("lib")}>Library</button>
      <SearchBar />
      <div>{ state.load.components.map(c => (<ComponentItem component={c} key={(Math.random() * 1000)} />)) }</div>
    </div>
  );
};

export default ComponentListContainer;
