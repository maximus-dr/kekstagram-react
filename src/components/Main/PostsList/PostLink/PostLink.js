import React from 'react';
import './PostLink.scss';
import { Link } from 'react-router-dom';
import { openPost } from '../../../../store/actions/postActions';
import { connect, useDispatch } from 'react-redux';


function PostLink({ postId, posts }) {
  
  const post = posts[postId];
  const dispatch = useDispatch();
  
  const onLinkClick = () => {
    dispatch(openPost(post));
  }

  if (!post) return null;

  return (
    <>
      <Link to={`/post/${postId}`} className="post-link" onClick={onLinkClick}> 
        <img className="post-link__img" src={post.img.url} alt="post" style={post.img.style} />
        <p className="post-link__stats">
          <span className="post-link__stat post-link__stat--comments">
            {post.comments.length}
          </span>
          <span className="post-link__stat post-link__stat--likes">
            {post.likes}
          </span>
        </p>
      </Link>
    </>
  )
}

const mapStateToProps = state => {
  return {
    currentPost: state.posts.current,
    posts: state.posts.list
  }
}

export default connect(mapStateToProps)(PostLink);
