import React from 'react';
import PostLink from './PostLink/PostLink';


export default function PostsList({ posts }) {

  if (!posts) return null;

  const sortIds = (sortBy) => {
    
    switch (sortBy) {
      case 'new':
        return posts.ids.sort((a, b) => posts.list[b].createdAt.localeCompare(posts.list[a].createdAt));
      case 'popular':
        return posts.ids.sort((a, b) => posts.list[b].likes - posts.list[a].likes);
      case 'discussed':
        return posts.ids.sort((a, b) => posts.list[b].comments.length - posts.list[a].comments.length);
      default:
        return [];
    }
  }

  const sortedIds = sortIds('discussed');


  return (
    <>
      {
        sortedIds.map(id => (
          <PostLink key={id} postId={id} />
        ))
      }
    </>
  )
}
