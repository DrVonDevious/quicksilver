import React, { useState, useEffect } from 'react';
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import NavBar from './containers/NavBar';

const App = () => {

  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`http://localhost:8080/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          setUser(data)
          // console.log(data)
        })
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleFormSwitch = (input) => {
    setForm(input);
  };

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:8080/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  };

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginContainer handleLogin={handleLogin}/>
      default:
        return <RegisterContainer handleLogin={handleLogin}/>
    }
  };

  return (
    <div className="App">
        <NavBar handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
        <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
    </div>
  );
}

export default App;
