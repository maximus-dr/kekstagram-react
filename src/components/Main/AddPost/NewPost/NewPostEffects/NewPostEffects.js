import React, { useRef, useEffect } from 'react';
import './NewPostEffects.scss';


export default function NewPostEffects({ effects, onEffectToggle }) {

  const effectRef = useRef('');

  // Set focus on 'none' effect by default
  useEffect(() => {
    effectRef.current.checked = true;
    effectRef.current.focus();
  }, []);

  
  const effectsList = Object.keys(effects).map(key => {

    const isChecked = key === 'none' ? effectRef : null;

    return (
      <li className="effects__item" key={key}>
        <input
          className="effects__radio visually-hidden" 
          type="radio" 
          name="effect" 
          id={`effect-${key}`} 
          value={key}
          onClick={onEffectToggle}
          ref={isChecked}
        />
        <label htmlFor={`effect-${key}`} className="effects__label">
          <span className={`effects__preview effects__preview--${key}`}>
          </span>
          {key}
        </label>
      </li>
    );
  })
  
  
  return (
    <fieldset className="new-post__effects effects">
      <ul className="effects__list">
        {effectsList}
      </ul>
    </fieldset>
  )
}
