import React from 'react';
import './PostSocial.scss';
import Comments from './Comments/Comments';
import Header from './Header/Header';
import CommentsCount from './Comments/CommentsCount';
import AddComment from './Comments/AddComment';

export default function PostSocial({ post }) {

  const COMMENTS_LIMIT = 5;

  return (
    <div className="social">
      <Header post={post} />
      <CommentsCount comments={post.comments} limit={COMMENTS_LIMIT} />
      <Comments comments={post.comments} limit={COMMENTS_LIMIT} />
      <AddComment />
    </div>
  )
}
