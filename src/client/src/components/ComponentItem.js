import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateJS, updateCSS, updateHTML, resetCode } from '../reducers/codeReducer';
import { removeComponent } from '../reducers/loadReducer';
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

  const handleDelete = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/user_components/${props.component.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("Deleted!");
        console.log(data);
        dispatch(removeComponent(props.component.id));
        dispatch(resetCode());
      })
  };

  return (
    <div className="component-item" onClick={handleLoadComponent}>
      {props.component.name}
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ComponentItem;
