import React from 'react'


export default function PostImage({ post }) {

  return (
    <div className="post__img">
      <img src={post.url} alt="post"/>
    </div>
  )
}
