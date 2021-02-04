import React from 'react'
import './Post.scss';
import { connect } from 'react-redux';
import PostSocial from './Social/PostSocial';
import PostImage from './PostImage';
import PostCloseBtn from './PostCloseBtn';

function Post(props) {
  const post = props.post;

  return (
    <div className="post__overlay">
      <div className="post">
        <PostImage post={post} />
        <PostSocial post={post} />
        <PostCloseBtn history={props.history} />
      </div>
    </div>
    
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const posts = state.posts.list;
  const post = posts.find(post => post.id === id);

  return {
    post
  }
}

export default connect(mapStateToProps)(Post);
