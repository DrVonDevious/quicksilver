import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateJS, updateCSS, updateHTML, resetCode } from '../reducers/codeReducer';
import { removeComponent } from '../reducers/loadReducer';
import '../css/ComponentItem.css';

const ComponentItem = (props) => {

  const dispatch = useDispatch();

  var component_url = props.component.user_id ? "user_components" : "library_components";

  const handleLoadComponent = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/${component_url}/${props.component.id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(component => {
        if(component) {
          dispatch(updateCSS(component.css_code));
          dispatch(updateHTML(component.html_code));
          dispatch(updateJS(component.js_code));
        };
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
    <div style={{height: "40px"}}>
      <div className="component-item" onClick={handleLoadComponent}>
        {props.component.name}
      </div>
      { props.component.user_id ? [
          <button className="delete-btn" onClick={handleDelete}>
            <svg className="delete-icon bi bi-x" width="2.5em" height="2.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
              <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
            </svg>
          </button>
      ] : null }
    </div>
  );
};

export default ComponentItem;
