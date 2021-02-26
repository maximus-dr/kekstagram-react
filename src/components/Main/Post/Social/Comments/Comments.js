import React from 'react'

export default function Comments({ comments }) {

  const commentsList = comments.map(comment => {
    return (
      <li className="social__comment" key={comment.id}>
        <div className="social__comment-img">
          <img src={comment.avatar} alt="avatar" height="35" />
        </div>
        
        <p className="social__comment-text">
          {comment.message}
        </p>
      </li>
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
