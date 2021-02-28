import React from 'react'
import NewPostScale from '../NewPostScale/NewPostScale'


export default function NewPostPreview({ img, showScale, scaleValue, onScaleChange }) {

  return (
    <div className="new-post__preview">
      <img 
        src={img.src} 
        style={img.style}
        alt="Предварительный просмотр фотографии"
      />

      <NewPostScale 
        showScale={showScale}
        scaleValue={scaleValue}
        onScaleChange={onScaleChange}
      />
    </div>
  )
}
