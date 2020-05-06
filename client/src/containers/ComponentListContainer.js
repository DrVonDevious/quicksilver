import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Rnd } from 'react-rnd';

import { setMode, setComponents, resetComponents } from '../reducers/loadReducer';
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
      fetchComponents(false);
      dispatch(setMode("user"));
    } else {
      fetchComponents(true);
      dispatch(setMode("lib"));
    };
  }, []);

  useEffect(() => {
    const libTab = document.querySelector("#libTab");
    const userTab = document.querySelector("#userTab");
    if(state.user.currentUser) {
      if(state.load.mode === "lib") {
        userTab.style.backgroundColor = "#162228";
        libTab.style.backgroundColor = "#263238";
      } else {
        libTab.style.backgroundColor = "#162228";
        userTab.style.backgroundColor = "#263238";
      };
    };
  });

  const handleSwitchList = (type) => {
    switch(type) {
      case "lib":
        fetchComponents(true);
        dispatch(setMode("lib"));
        break;
      case "user":
        fetchComponents(false);
        dispatch(setMode("user"));
        break;
    };
  };

  return (
    <Rnd
      className="component-container"
      bounds=".main-container"
      default={{
        x: window.innerWidth / 1.02 -320,
        y: window.innerHeight / 2.88 -250,
        width: 320,
        height: 500,
      }}
      enableResizing={{
        bottom: true,
        bottomLeft: false,
        bottomRight: false,
        left: false,
        right: false,
        top: false,
        topLeft: false,
        topRight: false,
      }}
    >
      <p className="component-label">Components</p>
      { state.user.currentUser ? [
        <button id="userTab" className="component-tab" onClick={() => handleSwitchList("user")}>My Components</button>,
      ] : null }
      <button id="libTab" className="component-tab" onClick={() => handleSwitchList("lib")}>Library</button>
      <div className="component-list">
      <SearchBar />
        {
          state.load.components
            .filter(c => c.name.includes(state.load.query))
            .map(c => (<ComponentItem component={c} key={uuid()} />))
        }
      </div>
    </Rnd>
  );
};

export default ComponentListContainer;
