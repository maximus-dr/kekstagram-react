import React from 'react'
import PostLink from './PostLink'

export default function PostList({posts}) {
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <PostLink post={post} key={post.id} />
      ))}
    </>
  )
}
