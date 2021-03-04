import React from 'react';
import './NewPostResize.scss';
import { NEW_POST_RESIZE } from './../../../../../store/constants';


export default function NewPostResize({ onResize, resizeValue }) {

  const resize = NEW_POST_RESIZE;

  const disablePlus = resizeValue === resize.max;
  const disableMinus = resizeValue === resize.min;

  return (
    <fieldset className="new-post__resize resize">
      <button 
        className="resize__control resize__control--minus"
        name="minus"
        onClick={onResize}
        disabled={disableMinus}
      >
        -
      </button>

      <input 
        className="resize__control resize__control--value" 
        type="text" 
        value={`${resizeValue}%`} 
        title="Image Scale" 
        name="scale" 
        readOnly 
      />

      <button 
        className="resize__control resize__control--plus"
        name="plus"
        onClick={onResize}
        disabled={disablePlus}
      >
        +
      </button>
    </fieldset>
  )
}
