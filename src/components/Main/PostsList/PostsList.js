import React from 'react';
import PostLink from './PostLink/PostLink';


export default function PostsList({ posts }) {

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
