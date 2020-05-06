import React from 'react';
import { useHistory } from 'react-router-dom';
import { setUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';
import '../css/RegisterForm.css';

const RegisterForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  // Parses our form data and sends it to post function
  const handleRegister = (e) => {
    e.preventDefault();
    var user = {
      username: e.target[0].value,
      password: e.target[1].value,
      password_confirmation: e.target[2].value
    };
    postUser(user);
  };

  // posts a new user to our users table
  // and logs any errors that exist in the form
  const postUser = (user) => {
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        password_confirmation: user.password_confirmation
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.jwt) {
          // adds the user info to client side storage
          localStorage.username = data.user.username;
          localStorage.password = data.user.password;
          localStorage.token = data.jwt;
          history.push("/");
          console.log(`Welcome ${data.user.username}!`);
          dispatch(setUser(data.user));
        } else {
          alert(data.error);
          console.log("Invalid signup!");
        };
      })
  };

  return (
    <div className="register-form">
      <h2 className="form-header">Register</h2>
      <form onSubmit={(e) => handleRegister(e)}>
        <label className="form-label" >Username</label>
        <br />
        <input className="form-input" type="text" />
        <br />
        <label className="form-label">Password</label>
        <br />
        <input className="form-input" type="password" />
        <br />
        <label className="form-label">Confirm Password</label>
        <br />
        <input className="form-input" type="password" />
        <br />
        <button className="form-btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
