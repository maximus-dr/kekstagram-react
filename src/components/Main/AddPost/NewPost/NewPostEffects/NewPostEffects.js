import React from 'react';
import './NewPostEffects.scss';


export default function NewPostEffects() {

  const effects = [
    { name: 'none', title: 'Оригинал'},
    { name: 'chrome', title: 'Хром'},
    { name: 'sepia', title: 'Сепия'},
    { name: 'marvin', title: 'Марвин'},
    { name: 'phobos', title: 'Фобос'},
    { name: 'heat', title: 'Зной'},
  ];

  const effectsList = effects.map(effect => {

    return (
      <li className="effects__item">
        <input type="radio" className="effects__radio visually-hidden" name="effect" id={`effect-${effect.name}`} value="none" />
        <label htmlFor={`effect-${effect.name}`} className="effects__label">
          <span className={`effects__preview effects__preview--${effect.name}`}>
          </span>
          {effect.title}
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
