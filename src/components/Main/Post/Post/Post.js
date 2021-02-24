import React from 'react'
import './Post.scss';
import { connect, useSelector } from 'react-redux';
import PostSocial from '../Social/PostSocial';
import PostImage from '../PostImage';
import PostCloseBtn from '../PostCloseBtn';


function Post(props) {

  const { closePost } = props;
  const post = useSelector(state => state.posts.current);

  if (post) {
    return (
      <div className="post__overlay">
        <div className="post">
          Post
          <PostImage post={post} />
          <PostSocial post={post} />
          <PostCloseBtn history={props.history} onClick={() => closePost(post)} />
        </div>
      </div>
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}


export default connect(mapStateToProps)(Post);
