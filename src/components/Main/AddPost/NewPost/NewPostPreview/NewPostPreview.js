import React from 'react'
import NewPostScale from '../NewPostScale/NewPostScale'


export default function NewPostPreview({ imgSrc }) {
  return (
    <div className="new-post__preview">
      <img src={imgSrc} alt="Предварительный просмотр фотографии" />

      <NewPostScale />
    </div>
  )
}
