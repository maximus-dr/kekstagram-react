import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { addComment } from './../../../../../store/actions/postActions';


function AddComment({ post }) {

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const onInputChange = e => {
    setMessage(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addComment(message, post));
  }

  return (
    <form className="social__footer" onSubmit={onSubmit}>
      <div className="social__comment-img">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="avatar" height="35" />
      </div>
      
      <input 
        className="social__footer-text" 
        type="text"
        placeholder="Ваш комментарий..." 
        value={message} 
        onChange={onInputChange}
      />

      <button className="social__footer-submit">Отправить</button>
    </form>
  )
}

const mapDispatchToProps = state => {
  return {
    post: state.posts.current
  }
}

export default connect(mapDispatchToProps)(AddComment);
