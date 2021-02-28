import React from 'react'

export default function Header({ post }) {
  
  return (
    <div className="social__header">

      <div className="social__img">
        <img src={post.author.avatar} alt="avatar" height="35" />
      </div>

      <div className="social__caption">
        <p>{post.description}</p>
        <span className="social__created-at">
          {post.createdAt}
        </span>
      </div>

      <p className="social__likes">
        <span>Нравится </span>
        <span className="social__likes-count">
          {post.likes}
        </span>
      </p>
    </div>
  )
}
