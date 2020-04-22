import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <button type="button">
          Home
        </button>
      </Link>

      <Link to="/login">
        <button type="button">
          Login
        </button>
      </Link>

      <Link to="/sign_up">
        <button type="button">
          Register
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
