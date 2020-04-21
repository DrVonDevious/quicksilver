import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterContainer = (props) => {
  return (
    <div>
      <RegisterForm handleLogin={props.handleLogin} />
    </div>
  );
};

export default RegisterContainer;
