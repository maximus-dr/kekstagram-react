import { parseISO } from 'date-fns';
import React from 'react'
import { formatDistanceToNow } from 'date-fns/esm';

export default function Comment({ comment }) {

  let timeAgo = '';

  if (comment.createdAt) {
    const date = parseISO(comment.createdAt);
    timeAgo = formatDistanceToNow(date);
  }
  

  return (
    <li className="social__comment" key={comment.id}>
      <div className="social__comment-img">
        <img src={comment.author.avatarUrl} alt="avatar" height="35" />
      </div>
      
      <div className="social__comment-text">
        <p>{comment.message}</p>
        <span className="social__created-at">
          {timeAgo} ago
        </span>
      </div>
    </li>
  )
}
