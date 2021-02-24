import React from 'react'
import PostLink from './PostLink/PostLink'

export default function PostList({posts}) {
  return (
    <>
      {posts && posts.map(post => (
        <PostLink post={post} key={post.id} />
      ))}
    </>
  )
}
