import React, { useState } from 'react';
import './PostSocial.scss';
import Comments from './PostComments/Comments';
import PostHeader from './PostHeader/PostHeader';
import AddComment from './PostComments/AddComment';
import CommentsCount from './PostComments/CommentsCount';


const SHOW_COMMENTS_BY = 5;


export default function PostSocial({ post }) {

  const limit = SHOW_COMMENTS_BY;
  const commentsCount = post.comments.length;
  const commentsList = post.comments;

  const [overLimit, setOverLimit] = useState(
    commentsCount > limit
  );

  const [commentsShown, setCommentsShown] = useState(
    overLimit
      ? limit
      : commentsCount
  );

  const [comments, setComments] = useState(
    overLimit
      ? commentsList.slice(0, limit)
      : commentsList
  );

  const onLoadMore = () => {
    if (commentsCount - commentsShown > limit) {
      const slice = commentsList.slice(comments.length, comments.length + limit);
      setComments(comments.concat(slice));
      setCommentsShown(commentsShown + limit);
    } else {
      const slice = commentsList.slice(comments.length, commentsList.length)
      setComments(comments.concat(slice));
      setCommentsShown(commentsList.length);
      setOverLimit(false);
    }
  }

  const onHideComments = () => {
    setComments(comments.slice(0, limit));
    setCommentsShown(limit);
    setOverLimit(true);
  }


  return (
    <div className="social">
      <PostHeader post={post} />
      <CommentsCount shown={commentsShown} total={commentsCount} />
      <Comments comments={comments} />
      {
        overLimit &&
        <button className="social__loadmore" onClick={onLoadMore}>
          Загрузить еще
        </button>
      }
      {
        commentsCount > limit &&
        commentsShown === commentsCount &&
        <button className="social__hide-comments" onClick={onHideComments}>
          Свернуть
        </button>
      }
      <AddComment />
    </div>
  )
}
