import React from 'react'


export default function PostImage({ post }) {
  
  return (
    <div className="post__img">
      <img src={post.img.url} style={post.img.style} alt="post"/>
    </div>
  )
}
