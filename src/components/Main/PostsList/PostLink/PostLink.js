import React from 'react';
import './PostLink.scss';
import { Link, useHistory } from 'react-router-dom';
import { closePost, openPost } from '../../../../store/actions/postsActions';
import { connect, useDispatch } from 'react-redux';
import Modal from '../../../Modal/Modal';
import Post from '../../Post/Post/Post';


function PostLink({ postId, posts, currentPost }) {
  
  const post = posts[postId];
  const dispatch = useDispatch();
  const history = useHistory();
  

  const onLinkClick = () => {
    dispatch(openPost(post));
  }

  const onModalClose = () => {
    dispatch(closePost());
    history.push('/');
  }

  if (!post) return null;

  return (
    <>
      <Link to={`/post/${postId}`} className="post-link" onClick={onLinkClick}> 
        <img className="post-link__img" src={post.img.url} alt="post" />
        <p className="post-link__stats">
          <span className="post-link__stat post-link__stat--comments">
            {post.comments.length}
          </span>
          <span className="post-link__stat post-link__stat--likes">
            {post.likes}
          </span>
        </p>
      </Link>

      <Modal isOpen={Boolean(currentPost)} close={onModalClose}>
        <Post />
      </Modal>
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
