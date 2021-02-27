import React from 'react'
import { addComment } from './../../../../../store/actions/postActions';
import { connect } from 'react-redux';

function AddComment() {

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <form className="social__footer" onSubmit={handleSubmit}>
      <div className="social__comment-img">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="avatar" height="35" />
      </div>
      
      <input className="social__footer-text" type="text" placeholder="Ваш комментарий..." />

      <button className="social__footer-submit">Отправить</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(AddComment);
