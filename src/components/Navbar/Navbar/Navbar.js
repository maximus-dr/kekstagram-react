import React from 'react';
import './Navbar.scss';
import NavButtons from '../NavButtons/NavButtons';
import AuthLinks from '../AuthLinks/AuthLinks';


export default function Navbar() {

  return (
    <div className="navbar container">
      <NavButtons />
      <AuthLinks />
    </div>
  )
}
