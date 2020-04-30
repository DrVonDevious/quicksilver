import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import convertHtmlToJSX from 'html-to-jsx';
import FileSaver from 'file-saver';

import '../css/MenuBar.css';

import { toggleMenu } from '../reducers/menuReducer';
import { toggleCode, updateCSS, updateJS, updateHTML } from '../reducers/codeReducer';
import { toggleSaveForm } from '../reducers/saveReducer';
import { toggleLoad } from '../reducers/loadReducer';
import { toggleImport } from '../reducers/importReducer';

const JSZip = require("jszip");

const MenuBar = () => {

  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const clearCode = () => {
    dispatch(updateJS(""));
    dispatch(updateCSS(""));
    dispatch(updateHTML(""));
  };

  const export_content = `import React from 'react';\nimport 'CSS_FILE_PATH';\n\nexport default const ComponentName = () => {\n\treturn (\n${convertHtmlToJSX(state.code.html).replace(/^/gm, "\t\t")}\n\t)\n};`;

  const generateZip = () => {
    var zip = new JSZip();

    zip.file("testHTML.html", state.code.html);
    zip.file("testCSS.css", state.code.css);
    zip.file("testJS.js", state.code.js);
    zip.file("testJSX.js", convertHtmlToJSX(export_content));

    zip.generateAsync({type:"blob"})
    .then(function(content) {
      FileSaver.saveAs(content, "quicksilver.zip");
    });
  };

  return (
    <div className="menu-bar">
      <button key="1" onClick={() => dispatch(toggleMenu())}>Close Menu</button>
      <button key="2" onClick={() => dispatch(toggleCode())}>Show Code</button>
      <button key="3" onClick={() => clearCode()}>Clear Component</button>
      <button key="4" onClick={() => dispatch(toggleLoad())}>Load Component</button>
      <button key="5" onClick={() => generateZip()}>Export Component</button>
      <button key="6" onClick={() => dispatch(toggleImport())}>Import File</button>
      { state.user.currentUser ? [
        <button key="7" onClick={() => dispatch(toggleSaveForm())}>Save Component</button>
      ] : null }
    </div>
  );
};

export default MenuBar;
