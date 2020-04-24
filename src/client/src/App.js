import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './css/App.css';

import NavBar from './containers/NavBar';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <MainContainer />
      <Route path="/login" component={LoginContainer}/>
      <Route path="/sign_up" component={RegisterContainer}/>
    </Router>
  );
}

export default App;
