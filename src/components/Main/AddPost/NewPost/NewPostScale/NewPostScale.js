import React from 'react';
import './NewPostScale.scss';


export default function NewPostScale({ showScale, scaleValue, onScaleChange }) {

  if (!showScale) return null;

  return (
    <div className="new-post__scale scale">
      <span className="scale__value">
        {scaleValue} %
      </span>
      <input 
        className="scale__line"
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={onScaleChange}
        defaultValue={100}
      />
    </div>
  )
}
