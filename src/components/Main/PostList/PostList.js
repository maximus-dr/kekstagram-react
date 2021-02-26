import React from 'react';
import PostLink from './PostLink/PostLink';


export default function PostList({ posts }) {

  return (
    <>
      {
        posts.ids && posts.ids.map(id => (
          <PostLink key={id} postId={id} />
        ))
      }
    </>
  )
}
