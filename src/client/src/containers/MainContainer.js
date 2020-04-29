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
    <div>
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
      <br />

      <div className="resize-container">
        <button className="lg-btn" onClick={() => dispatch(resizeCanvas("lg"))}>Large</button>
        <button className="md-btn"  onClick={() => dispatch(resizeCanvas("md"))}>Medium</button>
        <button className="sm-btn" onClick={() => dispatch(resizeCanvas("sm"))}>Small</button>
        <button className="mb-btn" onClick={() => dispatch(resizeCanvas("mb"))}>Mobile</button>
      </div>

      <MenuContainer />
    </div>
  )
};

export default MainContainer;
