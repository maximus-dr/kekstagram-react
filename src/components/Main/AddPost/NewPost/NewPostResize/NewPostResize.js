import React from 'react';
import './NewPostResize.scss';


export default function NewPostResize() {
  return (
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
  )
}
