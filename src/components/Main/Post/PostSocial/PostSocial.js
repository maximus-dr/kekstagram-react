import React from 'react';
import './PostSocial.scss';
import Comments from './PostComments/Comments';
import PostHeader from './PostHeader/PostHeader';
import AddComment from './PostComments/AddComment';
import CommentsCount from './PostComments/CommentsCount';


//const SHOW_COMMENTS_BY = 5;


export default function PostSocial({ post }) {

  const comments = post.comments;

  return (
    <div className="social">
      <PostHeader post={post} />
      <CommentsCount 
        shown={comments.length} 
        total={comments.length} 
      />
      <Comments comments={comments} />

      <AddComment />
    </div>
  )
}
