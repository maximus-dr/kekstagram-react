import React from 'react'
import Comment from './Comment';

export default function Comments({ comments }) {

  const commentsList = comments.map(comment => {
    return (
      <Comment 
        key={comment.id} 
        comment={comment} 
      />
    );
  })

  return (
    <>
      <ul className="social__comments">
        {commentsList}
      </ul>
    </>  
  )
}
