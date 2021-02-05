import React from 'react'
import './Post.scss';
import { connect } from 'react-redux';
import PostSocial from './Social/PostSocial';
import PostImage from './PostImage';
import PostCloseBtn from './PostCloseBtn';

function Post(props) {
  console.log(props);
  const id = props.match.params.id;
  let post = null;

  if (props.posts) {
    post = props.posts.find(post => {
      return post.id === id;
    })
  }

  console.log(post);
  return (
    <div className="post__overlay">
      <div className="post">
        Post
        <PostImage post={post} />
        <PostSocial post={post} />
        <PostCloseBtn history={props.history} />
      </div>
    </div>
    
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered['kekstagram-posts']
  }
}

export default connect(mapStateToProps)(Post);
