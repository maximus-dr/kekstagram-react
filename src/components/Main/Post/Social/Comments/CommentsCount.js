import React from 'react'

export default function CommentsCount({ comments, limit }) {

  const commentsShown = comments.length >= limit
    ? limit
    : comments.length;
  const commentsCount = comments.length;

  return (
    <div className="social__comment-count">
      <span className="comments-count-shown">
        {commentsShown}
      </span>
      <span> из </span>
      <span className="comments-count">
        {commentsCount}
      </span>
      <span> комментариев </span>
    </div>
  )
}
