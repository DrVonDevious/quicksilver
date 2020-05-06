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

  const export_content = `import React from 'react';\nimport 'CSS_FILE_PATH';\n\nexport default const ${state.code.componentName} = () => {\n\treturn (\n${convertHtmlToJSX(state.code.html).replace(/^/gm, "\t\t")}\n\t)\n};`;

  const generateZip = () => {
    var zip = new JSZip();

    zip.file(`${state.code.componentName}HTML.html`, state.code.html);
    zip.file(`${state.code.componentName}CSS.css`, state.code.css);
    zip.file(`${state.code.componentName}JS.js`, state.code.js);
    zip.file(`${state.code.componentName}.js`, convertHtmlToJSX(export_content));

    zip.generateAsync({type:"blob"})
      .then(function(content) {
        FileSaver.saveAs(content, `Quicksilver_${state.code.componentName}.zip`);
    });
  };

  return (
    <div className="menu-bar">
      <button className="action-btn coding-btn" key="2" title="Code" onClick={() => dispatch(toggleCode())}>
        <svg className="bi bi-code-slash" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z" clip-rule="evenodd"/>
        </svg>
      </button>

      <button className="action-btn load-btn" key="4" title="Components" onClick={() => dispatch(toggleLoad())}>
        <svg className="bi bi-card-list" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
          <circle cx="3.5" cy="5.5" r=".5"/>
          <circle cx="3.5" cy="8" r=".5"/>
          <circle cx="3.5" cy="10.5" r=".5"/>
        </svg>
      </button>

      <button className="action-btn export-btn" key="5" title="Export Component" onClick={() => generateZip()}>
        <svg className="bi bi-upload" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8zM5 4.854a.5.5 0 00.707 0L8 2.56l2.293 2.293A.5.5 0 1011 4.146L8.354 1.5a.5.5 0 00-.708 0L5 4.146a.5.5 0 000 .708z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M8 2a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 2z" clipRule="evenodd"/>
        </svg>
      </button>

      <button className="action-btn import-btn" key="6" title="Import Component" onClick={() => dispatch(toggleImport())}>
        <svg className="bi bi-download" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M5 7.5a.5.5 0 01.707 0L8 9.793 10.293 7.5a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L5 8.207A.5.5 0 015 7.5z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M8 1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 1z" clipRule="evenodd"/>
        </svg>
      </button>

      { state.user.currentUser ? [
        <button className="action-btn save-btn" key="7" title="Save Component" onClick={() => dispatch(toggleSaveForm())}>
          <svg className="bi bi-box-arrow-in-down" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 8.146a.5.5 0 01.708 0L8 10.793l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M8 1a.5.5 0 01.5.5v9a.5.5 0 01-1 0v-9A.5.5 0 018 1z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M1.5 13.5A1.5 1.5 0 003 15h10a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013 4h-1.5a.5.5 0 000 1H13a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-8A.5.5 0 013 5h1.5a.5.5 0 000-1H3a1.5 1.5 0 00-1.5 1.5v8z" clipRule="evenodd"/>
          </svg>
        </button>
      ] : null }

      <button className="action-btn clear-btn" key="3" title="Clear All Code" onClick={() => clearCode()}>
        <svg className="bi bi-x" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
          <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
        </svg>
      </button>

      <button className="action-btn close-btn" key="1" title="Close Menu" onClick={() => dispatch(toggleMenu())}>
        <svg className="bi bi-caret-down-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"/>
        </svg>
      </button>
    </div>
  );
};

export default MenuBar;
