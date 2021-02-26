import React from 'react'

export default function Comments({ comments, limit }) {

  const commentsList = comments.map(comment => {
    let key = Math.random();

    return (
      <li className="social__comment" key={key}>
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
        {
          comments.length >= limit
            ? commentsList.slice(0, limit)
            : commentsList
        }
      </ul>
      {
        comments.length > limit 
        && <button className="social__loadmore">Загрузить еще</button>
      }
    </>  
  )
}
