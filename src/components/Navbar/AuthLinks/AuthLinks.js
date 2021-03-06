import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from './../../../store/actions/authActions';


export default function AuthLinks() {

  const auth = useSelector(state => state.firebase.auth);
  const isLoggedIn = Boolean(auth.uid);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
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
  )
}
