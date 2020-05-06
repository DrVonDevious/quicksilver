import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSaveForm } from '../reducers/saveReducer';
import { setComponents } from '../reducers/loadReducer';
import '../css/SaveComponentContainer.css';

const SaveComponentForm = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleSave = (e, isLibrary) => {
    e.preventDefault();
    if (state.code.componentName.indexOf(' ') !== -1 || state.code.componentName === "") {
      alert("Name mustn't be empty or contain any spaces!");
    } else {
      const token = localStorage.getItem("token");
      if(isLibrary) {
        fetch("http://localhost:8080/library_components", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            name: state.code.componentName,
            js_code: state.code.js,
            css_code: state.code.css,
            html_code: state.code.html,
            img_src: "https://pics.me.me/thumb_pepehands-emote-pepe-t-shirt-teepublic-51219604.png",
          })
        })
          .then(res => res.json())
          .then(comp => {
            dispatch(toggleSaveForm());
            dispatch(setComponents([...state.load.components, comp]));
          });
      } else {
        fetch("http://localhost:8080/user_components", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            name: state.code.componentName,
            user_id: state.user.currentUser.id,
            js_code: state.code.js,
            css_code: state.code.css,
            html_code: state.code.html,
            img_src: "https://pics.me.me/thumb_pepehands-emote-pepe-t-shirt-teepublic-51219604.png",
          })
        })
          .then(res => res.json())
          .then(comp => {
            dispatch(toggleSaveForm());
            dispatch(setComponents([...state.load.components, comp]));
          });
      }
    }
  };

  return (
    <div>
      <label className="save-label">Do you wish to save this component as <br/>{state.code.componentName}?</label>
      <br/>
      <button className="yes-btn" onClick={(e) => handleSave(e, false)}>
        <svg className="bi bi-check" width="2em" height="2em" viewBox="0 0 16 16" stroke="green" fill="green" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
        </svg>
      </button>
      <button className="no-btn" onClick={() => dispatch(toggleSaveForm())}>
        <svg className="bi bi-x" width="2em" height="2em" viewBox="0 0 16 16" stroke="red" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
        </svg>
      </button>
      <button onClick={(e) => handleSave(e, true)}>Save To Library</button>
    </div>
  );
};

export default SaveComponentForm;
