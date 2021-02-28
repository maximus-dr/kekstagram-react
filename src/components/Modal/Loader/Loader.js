import React from 'react';
import reactDom from 'react-dom';
import './Loader.scss';


export default function Loader({ isOpen }) {

  if (!isOpen) return null;

  return reactDom.createPortal(
    <>
      <div className="loader__overlay"></div>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </div>
    </>,
    document.getElementById('loader')
  )
}
