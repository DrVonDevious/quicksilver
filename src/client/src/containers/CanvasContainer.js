import React from 'react';
import { useSelector } from 'react-redux';
import dragula from 'react-dragula';
import '../css/CanvasContainer.css';

const CanvasContainer = () => {

  const codeState = useSelector(state => state.code);

  const generatePageURL = ({ html, css, js }) => {

    const getBlobURL = ( code, type ) => {
      const blob = new Blob([code], {type});
      return URL.createObjectURL(blob);
    };

    const cssURL = getBlobURL(css, 'text/css');
    const jsURL = getBlobURL(js, 'text/javascript');

    const source = `
      <html>
        <head>
          ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
          ${js && `<script src="${jsURL}"></script>`}
        </head>
        <body>
          ${html || ''}
        </body>
      </html>
    `

    return getBlobURL(source, 'text/html');

  };

  const url = generatePageURL({html: codeState.html, css: codeState.css, js: codeState.js});

  return (
    <iframe dropzone="true" onDrop={() => console.log("DROPPED!")} className="main-canvas" src={url} />
  );
};

export default CanvasContainer;
