import React from 'react'

export default function CommentsCount({ shown, total }) {

  const message = total === 0
    ? <p>Добавьте первый комментарий</p>
    : null;

  return (
    <div className="social__comment-count">
      <span className="comments-count-shown">
        {shown}
      </span>
      <span> из </span>
      <span className="comments-count">
        {total}
      </span>
      <span> комментариев </span>
      {message}
    </div>
  )
}
