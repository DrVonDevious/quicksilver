import React from 'react';
import { useSelector } from 'react-redux';
import '../css/CanvasContainer.css';
import ReactDomServer from 'react-dom/server'

const CanvasContainer = () => {

  const state = useSelector(state => state);

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

  const url = generatePageURL({html: state.code.html, css: state.code.css, js: state.code.js});

  return (
    <div>
      <iframe className="main-canvas" src={url} style={{width: state.canvas.width, height: state.canvas.height}}/>
      <div className="iframe-shield" style={{width: state.canvas.width, height: state.canvas.height}} />
    </div>
  );
};

export default CanvasContainer;
