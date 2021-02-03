import React from 'react';
import './AddPost.scss';

export default function AddPost() {
  return (
    <section className="add-post">
      <div className="add-post__wrapper">

        <form className="add-post__form">

          <fieldset className="add-post__fieldset">
            <input 
              className="add-post__input visually-hidden" 
              type="file" 
              id="add-file"
              required 
            />
            <label htmlFor="add-file" className="add-post__label add-post-control">
              Загрузить
            </label>
          </fieldset>
          
        </form>
      </div>
    </section>
  )
}
