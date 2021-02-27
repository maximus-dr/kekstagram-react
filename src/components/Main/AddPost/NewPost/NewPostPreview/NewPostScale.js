import React from 'react';
import './NewPostScale.scss';


export default function NewPostScale() {
  return (
    <fieldset className="new-post__scale scale">
      <input
        className="scale__value" 
        type="text" 
        name="effect-level" 
        value="100%" 
        readOnly 
      />
      <div className="scale__line">
        <div className="scale__pin" tabIndex="0">
          Кнопка изменения глубины эффекта фотографии
        </div>
        <div className="scale__level">
          Глубина эффекта фотографии
        </div>
      </div>
    </fieldset>
  )
}
