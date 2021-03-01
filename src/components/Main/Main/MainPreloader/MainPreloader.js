import React from 'react';
import './MainPreloader.scss';

export default function MainPreloader() {

  return (
    <div className="main-preloader">
      <div className="main-preloader__overlay"></div>
      <h2 className="main-preloader__message">Loading Posts ...</h2>
    </div>
  )
}
