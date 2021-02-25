import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { logout } from './../../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';


export default function Navbar() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.firebase.auth);
  const isLoggedIn = Boolean(auth.uid);

  const onLogout = () => dispatch(logout());

  return (
    <div className="navbar container">
      <div className="navbar__buttons">
        <button className="navbar__button navbar__button--active">Популярные</button>
        <button className="navbar__button">Новые</button>
        <button className="navbar__button">Обсуждаемые</button>
      </div>

      <div className="navbar__auth-links">
        {
          isLoggedIn
            ? <button onClick={onLogout}>Logout</button>
            : <div>
              <Link to="signup" className="navbar__auth-link">Sign Up</Link>
              <Link to="login" className="navbar__auth-link">Log In</Link>
            </div>
        } 
      </div>
    </div>
  )
}
