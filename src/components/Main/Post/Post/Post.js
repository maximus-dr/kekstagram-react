import React from 'react'
import './Post.scss';
import PostSocial from '../PostSocial/PostSocial';
import PostImage from '../PostImage';
import { connect } from 'react-redux';


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

const mapStateToProps = state => {
  return {
    post: state.posts.current
  }
}
  
export default connect(mapStateToProps)(Post);
