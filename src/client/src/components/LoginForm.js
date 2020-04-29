import React from 'react';
import { useHistory } from 'react-router-dom';
import { setUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';
import '../css/LoginForm.css';

const LoginForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  // Parses our form data and sends it to post function
  const handleLogin = (e) => {
    e.preventDefault();
    var user = {
      username: e.target[0].value,
      password: e.target[1].value
    };
    postUser(user);
  };

  // posts a user to login for authentication
  // and logs any errors that exist
  const postUser = (user) => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
      .then(res => res.json())
      .then(data => {
        // if the user is authenticated
        if (data.jwt) {
          localStorage.setItem("username", data.user.username);
          localStorage.setItem("password", data.user.password);
          localStorage.setItem("token", data.jwt);
          history.push("/");
          console.log(`Welcome back ${data.user.username}!`);
          dispatch(setUser(data.user));
        } else {
          alert("Login Invalid! Username or Password is Incorrect.");
          console.log("Invalid Login");
        };
      })
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={(e) => handleLogin(e)}>
        <label>Username: </label>
        <input type="text" />
        <br />
        <label>Password: </label>
        <input type="text" />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
