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
            options={{
              value: "what",
              mode: "css",
              theme: "material",
              lineNumbers: true
            }}
            onChange={(e) => dispatch(updateCSS(e.getValue()))}
          />
        </div>
      ] : null }

      {/* --------- HTML Code Box -------- */}
      { codeState.mode === "html" ? [
        <div>
          HTML:
          <CodeMirror
            options={{
              mode: "htmlmixed",
              theme: "material",
              lineNumbers: true
            }}
            onChange={(e) => dispatch(updateHTML(e.getValue()))}
          />
        </div>
      ] : null }

      {/* ------ Javascript Code Box ----- */}
      { codeState.mode === "js" ? [
        <div>
          JavaScript:
          <CodeMirror
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true
            }}
            onChange={(e) => dispatch(updateJS(e.getValue()))}
          />
        </div>
      ] : null }
    </div>
  );
};

export default CodeBox;
