import React from 'react';
import './PostLink.scss';
import { Link, useHistory } from 'react-router-dom';
import { closePost, openPost } from '../../../../store/actions/postActions';
import { connect, useDispatch } from 'react-redux';
import Modal from '../../../Modal/Modal';
import Post from '../../Post/Post/Post';


function PostLink({ post, currentPost, openPost }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const onLinkClick = () => {
    openPost({...post});
  }

  const onModalClose = () => {
    dispatch(closePost());
    history.push('/');
  }

  return (
    <>
      <Link to={`/post/${post.id}`} className="post-link" onClick={onLinkClick}> 
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

      <Modal isOpen={Boolean(currentPost)} close={onModalClose}>
        <Post post={post} />
      </Modal>
    </>
  )
}

const mapStateToProps = state => {
  return {
    currentPost: state.posts.current
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openPost: (post) => dispatch(openPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLink);
