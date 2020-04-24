import React from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';

import {UnControlled as CodeMirror} from 'react-codemirror2'

import { useSelector, useDispatch } from 'react-redux';

import { updateCSS, updateHTML, updateJS } from '../reducers/codeReducer';

const CodeBox = () => {

  const dispatch = useDispatch();
  const codeState = useSelector(state => state.code);
  const canvas = document.getElementsByClassName("main-canvas")

  return (
    <div className="code-box">

      {/* --------- CSS Code Box -------- */}
      { codeState.mode === "css" ? [
        <div>
          CSS:
          <CodeMirror
            value={codeState.css}
            options={{
              mode: "css",
              theme: "material",
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {
              var pos = editor.getCursor();
              dispatch(updateCSS(editor.getValue()));
              editor.setCursor(pos);
            }}
          />
        </div>
      ] : null }

      {/* --------- HTML Code Box -------- */}
      { codeState.mode === "html" ? [
        <div>
          HTML:
          <CodeMirror
            value={codeState.html}
            options={{
              mode: "htmlmixed",
              theme: "material",
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {
              var pos = editor.getCursor();
              dispatch(updateHTML(editor.getValue()));
              editor.setCursor(pos);
            }}
          />
        </div>
      ] : null }

      {/* ------ Javascript Code Box ----- */}
      { codeState.mode === "js" ? [
        <div>
          JavaScript:
          <CodeMirror
            value={codeState.js}
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {
              var pos = editor.getCursor();
              dispatch(updateJS(editor.getValue()));
              editor.setCursor(pos);
            }}
          />
        </div>
      ] : null }
    </div>
  );
};

export default CodeBox;
