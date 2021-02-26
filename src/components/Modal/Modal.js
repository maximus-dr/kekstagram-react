import React from 'react';
import './Modal.scss';
import reactDom from 'react-dom';


export default function Modal({ children, isOpen, close }) {

  if (!isOpen) return null;


  return reactDom.createPortal(
    <>
      <div className="modal__overlay"></div>
      <div className="modal">

        <button 
          className="modal__close-btn"
          onClick={() => close()}
        >
          Закрыть
        </button>

        { children }
      </div>
    </>,
    document.getElementById('app-modal')
  )
}
