import React from 'react';
import './NewPostText.scss';


export default function NewPostText({ onDescriptionChange, onMessageChange }) {

  return (
    <fieldset className="new-post__text text">
      <label className="text__hashtags-label" htmlFor="hashtags">
        <div className="text__validation-message">Текст</div>
        <input 
          className="text__hashtags" 
          type="text" 
          id="hashtags" 
          name="hashtags" 
          placeholder="Заголовок" 
          minLength="2" 
          maxLength="104"
          onChange={onDescriptionChange}
        />
      </label>

      <textarea 
        className="text__description" 
        name="description" 
        placeholder="Ваш комментарий..." 
        maxLength="140"
        onChange={onMessageChange}
      >
      </textarea>
    </fieldset>
  )
}
