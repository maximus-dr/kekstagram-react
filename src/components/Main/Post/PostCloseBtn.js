import React from 'react';
import { connect } from 'react-redux';
import { closePost } from '../../../store/actions/postActions';


function PostCloseBtn(props) {

  const {history, closePost} = props;

  const handleClick = () => {
    history.push('/');
    closePost();
  }

  return (
    <button className="post__close-btn" onClick={handleClick}>Закрыть</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    closePost: (post) => dispatch(closePost(post))
  }
}

export default connect(null, mapDispatchToProps)(PostCloseBtn);
