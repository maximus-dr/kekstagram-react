import React from 'react'
import { addComment } from './../../../../../store/actions/postActions';
import { connect } from 'react-redux';

function AddComment(props) {

  const {addComment} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({avatar: 'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg', message: 'test message' });
  }

  return (
    <form className="social__footer" onSubmit={handleSubmit}>
      <img className="social__comment-img" src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="avatar" width="35" height="35" />
      <input className="social__footer-text" type="text" placeholder="Ваш комментарий..." />
      <button className="social__footer-submit">Отправить</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(AddComment);
