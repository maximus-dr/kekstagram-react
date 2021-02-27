import React from 'react';
import './NewPostText.scss';


export default function NewPostText() {

  return (
    <fieldset className="new-post__text text">
      <label className="text__hashtags-label" htmlFor="hashtags">
        <div className="text__validation-message">Текст</div>
        <input className="text__hashtags" type="text" id="hashtags" name="hashtags" placeholder="#хэш-тег" minLength="2" maxLength="104" />
      </label>

      <textarea className="text__description" name="description" placeholder="Ваш комментарий..." maxLength="140"></textarea>
    </fieldset>
  )
}
