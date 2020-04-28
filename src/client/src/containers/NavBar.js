import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetUser } from '../reducers/userReducer';
import { resetCode } from '../reducers/codeReducer';
import { resetComponents, toggleLoad } from '../reducers/loadReducer';
import '../css/NavBar.css';

const NavBar = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <div className="nav-bar">
      <Link to="/">
        <button type="button">
          Home
        </button>
      </Link>

      { state.user.currentUser ? [
        <Link to="/">
          <button onClick={() => (
            dispatch(resetUser()),
            dispatch(resetCode()),
            dispatch(resetComponents()),
            dispatch(toggleLoad())
          )} type="button">
            Logout
          </button>
        </Link>
      ] : null }

      { !state.user.currentUser ? [
        <Link to="/login">
          <button type="button">
            Login
          </button>
        </Link>
      ] : null }

      { !state.user.currentUser ? [
      <Link to="/sign_up">
        <button type="button">
          Register
        </button>
      </Link>
      ] : null }
    </div>
  );
};

export default NavBar;
