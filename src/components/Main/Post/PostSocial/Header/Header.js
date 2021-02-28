import React from 'react'

export default function Header({ post }) {
  
  return (
    <div className="social__header">

      <div className="social__img">
        <img src={post.author.avatar} alt="avatar" height="35" />
      </div>

      <p className="social__caption">
        {post.description}
      </p>

      <p className="social__likes">
        <span>Нравится </span>
        <span className="social__likes-count">
          {post.likes}
        </span>
      </p>
    </div>
  )
}
