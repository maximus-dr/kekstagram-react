import React from 'react'

export default function PostList({posts}) {
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <div className="post__link" key={post.id}> 
          <img className="post-link__img" src={post.url} alt="post" width="182" height="182" />
          <p className="post-link__stats">
            <span className="post-link__stat post-link__stat--comments">
              {post.comments.length}
            </span>
            <span className="post-link__stat post-link__stat--likes">
              {post.likes}
            </span>
          </p>
        </div>
      ))}
    </>
  )
}
