import React from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';

import {UnControlled as CodeMirror} from 'react-codemirror2'
import { useSelector } from 'react-redux';

const CodeBox = () => {

  const mode = useSelector(state => state.code.mode);

  return (
    <div className="code-box">

      {/* --------- CSS Code Box -------- */}
      { mode === "css" ? [
        <div>
          CSS:
          <CodeMirror
            options={{
              mode: "css",
              theme: "material",
              lineNumbers: true
            }}
          />
        </div>
      ] : null }

      {/* --------- HTML Code Box -------- */}
      { mode === "html" ? [
        <div>
          HTML:
          <CodeMirror
            options={{
              mode: "htmlmixed",
              theme: "material",
              lineNumbers: true
            }}
          />
        </div>
      ] : null }

      {/* ------ Javascript Code Box ----- */}
      { mode === "js" ? [
        <div>
          JavaScript:
          <CodeMirror
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true
            }}
          />
        </div>
      ] : null }
    </div>
  );
};

export default CodeBox;
