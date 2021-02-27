import React from 'react';
import './NewPost.scss';
import preloader from '../../../../assets/img/loading.gif';


export default function NewPost() {
  return (
    <section className="new-post">
      <div className="new-post__wrapper">

        <form className="new-post__form">

          <fieldset className="new-post__resize resize">
            <button className="resize__control resize__control--minus">
              -
            </button>

            <input 
              className="resize__control resize__control--value" 
              type="text" 
              value="100%" 
              title="Image Scale" 
              name="scale" 
              readOnly 
            />

            <button className="resize__control resize__control--plus">
              +
            </button>
          </fieldset>

          <div className="new-post__preview">
            <img src={preloader} alt="Предварительный просмотр фотографии" />

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
          </div>

          

          <fieldset className="new-post__effects effects">
          <ul className="effects__list">
              <li className="effects__item">
                <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-none" value="none" />
                <label htmlFor="effect-none" className="effects__label">
                  <span className="effects__preview effects__preview--none">Превью фото без эффекта</span>
                  Оригинал
                </label>
              </li>
              <li className="effects__item">
                <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-chrome" value="chrome" />
                <label htmlFor="effect-chrome" className="effects__label">
                  <span className="effects__preview effects__preview--chrome">Превью эффекта Хром</span>
                  Хром
                </label>
              </li>
              <li className="effects__item">
                <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-sepia" value="sepia" />
                <label htmlFor="effect-sepia" className="effects__label">
                  <span className="effects__preview effects__preview--sepia">Превью эффекта Сепия</span>
                  Сепия
                </label>
              </li>
              <li className="effects__item">
                <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-marvin" value="marvin" />
                <label htmlFor="effect-marvin" className="effects__label">
                  <span className="effects__preview effects__preview--marvin">Превью эффекта Марвин</span>
                  Марвин
                </label>
              </li>
              <li className="effects__item">
                <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-phobos" value="phobos" />
                <label htmlFor="effect-phobos" className="effects__label">
                  <span className="effects__preview effects__preview--phobos">Превью эффекта Фобос</span>
                  Фобос
                </label>
              </li>
              <li className="effects__item">
                <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-heat" value="heat" />
                <label htmlFor="effect-heat" className="effects__label">
                  <span className="effects__preview effects__preview--heat">Превью эффекта Зной</span>
                  Зной
                </label>
              </li>
            </ul>
          </fieldset>

          <button type="submit">Submit</button>
        </form>

      </div>
    </section>
  )
}
