import React, { useState } from 'react';
import './NewPostScale.scss';


export default function NewPostScale() {

  const DEFAULT_VALUE = 100;
  const [rangeValue, setRangeValue] = useState(DEFAULT_VALUE);

  return (
    <div className="new-post__scale scale">
      <span className="scale__value">
        {rangeValue} %
      </span>
      <input 
        className="scale__line"
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={e => setRangeValue(e.target.value)}
        defaultValue={`${DEFAULT_VALUE}`}
      />
    </div>
  )
}
