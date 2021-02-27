import React from 'react'
import './Post.scss';
import PostSocial from '../PostSocial/PostSocial';
import PostImage from '../PostImage';


function Post({ post }) {

  if (!post) return null;

  return (
    <div className="post">
        Post
        <PostImage post={post} />
        <PostSocial post={post} />
      </div>
  );
}
  
export default Post;
