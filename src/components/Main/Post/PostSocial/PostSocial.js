import React, { useState } from 'react';
import './PostSocial.scss';
import Comments from './Comments/Comments';
import Header from './Header/Header';
import AddComment from './Comments/AddComment';
import CommentsCount from './Comments/CommentsCount';


const SHOW_COMMENTS_BY = 5;


export default function   PostSocial({ post }) {

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
      <Header post={post} />
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
