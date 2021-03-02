import React from 'react'
import { formatDateToNow } from '../../../../../utils/utils';


export default function Comment({ comment }) {

  let timeAgo = comment.createdAt
    ? formatDateToNow(comment.createdAt)
    : '';
  

  return (
    <li className="social__comment" key={comment.id}>
      <div className="social__comment-img">
        <img src={comment.author.avatarUrl} alt="avatar" height="35" />
      </div>
      
      <div className="social__comment-text">
        <p>{comment.message}</p>
        <span className="social__created-at">
          {timeAgo}
        </span>
      </div>
    </li>
  )
}
