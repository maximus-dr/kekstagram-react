import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar container">
      <div className="navbar__buttons">
        <button className="navbar__button navbar__button--active">Популярные</button>
        <button className="navbar__button">Новые</button>
        <button className="navbar__button">Обсуждаемые</button>
      </div>
    </div>
  )
}