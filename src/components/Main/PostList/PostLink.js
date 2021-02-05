import React from 'react';
import './PostLink.scss';
import { Link } from 'react-router-dom';
import { openPost } from './../../../store/actions/postActions';
import { connect } from 'react-redux';

function PostLink(props) {

  const { post, openPost } = props;

  const handleClick = () => {
    openPost({...post});
  }

  return (
    <Link to={`/post/${post.id}`} className="post-link" onClick={handleClick}> 
      <img className="post-link__img" src={post.url} alt="post" width="182" height="182" />
      <p className="post-link__stats">
        <span className="post-link__stat post-link__stat--comments">
          {post.comments.length}
        </span>
        <span className="post-link__stat post-link__stat--likes">
          {post.likes}
        </span>
      </p>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    openPost: (post) => dispatch(openPost(post))
  }
}

export default connect(null, mapDispatchToProps)(PostLink);
