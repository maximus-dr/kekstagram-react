import React from 'react'

export default function Header({ post }) {
  return (
    <div className="social__header">
      <img className="social__img" src={post.avatar} alt="avatar" width="35" height="35" />
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
