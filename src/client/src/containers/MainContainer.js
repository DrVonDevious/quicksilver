import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOMServer from 'react-dom/server';

import { setUsers } from '../reducers/userReducer';
import { setName } from '../reducers/codeReducer';
import { resizeCanvas } from '../reducers/canvasReducer';
import CanvasContainer from '../containers/CanvasContainer';
import MenuContainer from '../containers/MenuContainer';
import CodeBoxContainer from '../containers/CodeBoxContainer';
import SaveComponentContainer from '../containers/SaveComponentContainer';
import ComponentListContainer from '../containers/ComponentListContainer';
import ImportContainer from '../containers/ImportContainer';

import '../css/MainContainer.css';

const MainContainer = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  // fetches all the users that exist in our database
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(res => res.json())
      .then(users => {
        dispatch(setUsers(users));
      })
  }, []);

  return (
    <div className="main-container" style={{height: window.innerHeight-37}}>
      <input
        type="text"
        className="component-name"
        value={state.code.componentName}
        onChange={(e) => dispatch(setName(e.target.value))}
      />

      <CanvasContainer />
      { state.code.codeState ? <CodeBoxContainer /> : null }
      { state.save.saveFormState ? <SaveComponentContainer /> : null }
      { state.load.loadState ? <ComponentListContainer /> : null }
      { state.import.importState ? <ImportContainer /> : null }
      <br />

      <div className="resize-container">
        <button className="lg-btn" onClick={() => dispatch(resizeCanvas("lg"))}>
          <svg className="bi bi-window" width="2em" height="2em" viewBox="0 0 16 16" fill="blue" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M15 6H1V5h14v1z" clipRule="evenodd"/>
            <path d="M3 3.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0z"/>
          </svg>
        </button>
        {/* <button className="md-btn"  onClick={() => dispatch(resizeCanvas("md"))}>Medium</button> */}
        {/* <button className="sm-btn" onClick={() => dispatch(resizeCanvas("sm"))}>Small</button> */}
        <button className="mb-btn" onClick={() => dispatch(resizeCanvas("mb"))}>
          <svg className="bi bi-phone" width="2em" height="2em" viewBox="0 0 16 16" fill="blue" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>

      <MenuContainer />
    </div>
  )
};

export default MainContainer;
