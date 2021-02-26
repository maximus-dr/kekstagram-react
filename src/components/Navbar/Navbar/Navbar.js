import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { logout } from './../../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import NavButtons from '../NavButtons/NavButtons';


export default function Navbar() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.firebase.auth);
  const isLoggedIn = Boolean(auth.uid);

  const onLogout = () => dispatch(logout());
  

  return (
    <div className="navbar container">
      
      <NavButtons />

      <div className="navbar__auth-links">
        {
          isLoggedIn
            ? <Link 
                to="/" 
                className="navbar__auth-link" 
                onClick={onLogout} >
                  Logout
              </Link>
            : <>
              <Link to="signup" className="navbar__auth-link">Sign Up</Link>
              <Link to="login" className="navbar__auth-link">Log In</Link>
            </>
        } 
      </div>
    </div>
  )
}
