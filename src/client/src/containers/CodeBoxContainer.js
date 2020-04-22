import React from 'react';
import { useDispatch } from 'react-redux';
import { setMode } from '../reducers/codeReducer';

import CodeBox from '../components/CodeBox';

import '../css/CodeBox.css';

const CodeBoxContainer = () => {

  const dispatch = useDispatch();

  return (
    <div className="code-box-container">
      <button onClick={() => dispatch(setMode("css"))}>CSS</button>
      <button onClick={() => dispatch(setMode("html"))}>HTML</button>
      <button onClick={() => dispatch(setMode("js"))}>JS</button>
      <CodeBox />
    </div>
  );
};

export default CodeBoxContainer;
