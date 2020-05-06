import React from 'react';
import { useDispatch } from 'react-redux';
import Dropzone from 'react-dropzone';
import { updateCSS, updateHTML, updateJS } from '../reducers/codeReducer';
import '../css/ImportContainer.css';

const ImportContainer = () => {

  const dispatch = useDispatch();

  const handleImport = (file) => {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (evt) => {
      switch(file.type) {
        case "text/css":
          dispatch(updateCSS(evt.target.result));
          break;
        case "text/html":
          dispatch(updateHTML(evt.target.result));
          break;
         case "text/javascript":
          dispatch(updateJS(evt.target.result));
          break;
        default: alert("File Type Not Supported");
      };

      reader.onerror = (evt) => {
        alert("File not loaded!");
      };
    };
  };

  return (
    <div className="import-container">
      <Dropzone onDrop={acceptedFile => handleImport(acceptedFile[0])}>
        {({getRootProps, getInputProps}) => (
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop files here, or click to Browse</p>
            </div>
        )}
      </Dropzone>
    </div>
  )
};

export default ImportContainer;
