import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../reducers/codeReducer';
import { Rnd } from 'react-rnd';

import CodeBox from '../components/CodeBox';

import '../css/CodeBox.css';

const CodeBoxContainer = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleTabClick = (mode) => {
    dispatch(setMode(mode));
  };

  useEffect(() => {
    const selectedColor = "#263238";
    const deselectedColor = "#162228";

    const htmlTab = document.querySelector(".html-btn");
    const cssTab = document.querySelector(".css-btn");
    const jsTab = document.querySelector(".js-btn");

    switch(state.code.mode) {
      case "html":
        jsTab.style.backgroundColor = deselectedColor;
        htmlTab.style.backgroundColor = selectedColor;
        cssTab.style.backgroundColor = deselectedColor;
        break;
      case "css":
        jsTab.style.backgroundColor = deselectedColor;
        htmlTab.style.backgroundColor = deselectedColor;
        cssTab.style.backgroundColor = selectedColor;
        break;
      case "js":
        jsTab.style.backgroundColor = selectedColor;
        htmlTab.style.backgroundColor = deselectedColor;
        cssTab.style.backgroundColor = deselectedColor;
        break;
      default: break;
    };
  });

  return (
    <Rnd className="code-box-container" default={{ height: 400, x: 50, y: window.innerHeight / 3}} bounds=".main-container" cancel=".code-box">
      <button className="code-btn html-btn" onClick={() => handleTabClick("html")}>HTML</button>
      <button className="code-btn css-btn" onClick={() => handleTabClick("css")}>CSS</button>
      <button className="code-btn js-btn" onClick={() => handleTabClick("js")}>JavaScript</button>
      <CodeBox />
    </Rnd>
  );
};

export default CodeBoxContainer;
