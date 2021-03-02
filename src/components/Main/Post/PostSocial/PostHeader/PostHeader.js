import React from 'react'
import { useDispatch } from 'react-redux';
import { like } from '../../../../../store/actions/postActions';
import classNames from 'classnames';


export default function PostHeader({ post }) {

  const dispatch = useDispatch();

  const addLike = () => {
    dispatch(like(post.id, post.isLiked));
  }
  
  const likeClass = classNames(
    "social__likes-count", 
    {"social__likes-count--active": post.isLiked}
  );
  
  return (
    <div className="social__header">

      <div className="social__img">
        <img src={post.author.avatar} alt="avatar" height="35" />
      </div>

      <div className="social__caption">
        <p>{post.description}</p>
        <span className="social__created-at">
          {post.createdAt}
        </span>
      </div>

      <p className="social__likes">
        <span>Нравится </span>
        <span className={likeClass} onClick={addLike}>
          {post.likes}
        </span>
      </p>
    </div>
  )
}
