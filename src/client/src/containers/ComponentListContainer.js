import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

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
        var components = data;
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
      <div>
        {
          state.load.components
            .filter(c => c.name.includes(state.load.query))
            .map(c => (<ComponentItem component={c} key={uuid()} />))
        }
      </div>
    </div>
  );
};

export default ComponentListContainer;
