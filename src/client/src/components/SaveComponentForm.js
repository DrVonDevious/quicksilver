import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSaveForm } from '../reducers/saveReducer';

const SaveComponentForm = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleSave = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/user_components", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: e.target[0].value,
        user_id: state.user.currentUser.id,
        js_code: state.code.js,
        css_code: state.code.css,
        html_code: state.code.html,
        img_src: "https://pics.me.me/thumb_pepehands-emote-pepe-t-shirt-teepublic-51219604.png",
      })
    })
      .then(res => res.json())
      .then(comp => {
        console.log(comp);
        dispatch(toggleSaveForm());
      });
  };

  return (
    <form onSubmit={handleSave}>
      <label>Component Name: </label>
      <input type="text" />
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default SaveComponentForm;
