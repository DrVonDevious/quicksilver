import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginContainer = (props) => {
  return (
    <div>
      <LoginForm handleLogin={props.handleLogin} />
    </div>
  );
};

export default LoginContainer;
