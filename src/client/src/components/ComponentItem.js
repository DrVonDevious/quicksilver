import React from 'react';
import { useDispatch } from 'react-redux';

import { updateJS, updateCSS, updateHTML } from '../reducers/codeReducer';
import '../css/ComponentItem.css';

const ComponentItem = (props) => {

  const dispatch = useDispatch();

  const handleLoadComponent = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/user_components/${props.component.id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(component => {
        dispatch(updateCSS(component.css_code));
        dispatch(updateHTML(component.html_code));
        dispatch(updateJS(component.js_code));
      })
  };

  return (
    <div className="component-item" onClick={handleLoadComponent}>
      {props.component.name}
    </div>
  );
};

export default ComponentItem;
