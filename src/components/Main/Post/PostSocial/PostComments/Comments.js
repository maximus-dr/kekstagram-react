import React from 'react'

export default function Comments({ comments }) {

  const commentsList = comments.map(comment => {
    return (
      <li className="social__comment" key={comment.id}>
        <div className="social__comment-img">
          <img src={comment.author.avatar} alt="avatar" height="35" />
        </div>
        
        <div className="social__comment-text">
          <p>{comment.message}</p>
          <span className="social__created-at">
            {comment.createdAt}
          </span>
        </div>
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
