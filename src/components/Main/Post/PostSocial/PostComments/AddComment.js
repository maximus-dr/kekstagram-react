import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { addComment } from './../../../../../store/actions/postActions';


function AddComment({ post }) {

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const canSubmit = Boolean(message);

  const onInputChange = e => {
    setMessage(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addComment(message, post));
    setMessage('');
  }

  return (
    <form className="social__footer" onSubmit={onSubmit}>
      <div className="social__comment-img">
        <img src="https://firebasestorage.googleapis.com/v0/b/kekstagram-2741a.appspot.com/o/avatar.jpg?alt=media&token=31eb2327-3e13-474a-b9a6-14da17a4b1da" alt="avatar" height="35" />
      </div>
      
      <input 
        className="social__footer-text" 
        type="text"
        placeholder="Ваш комментарий..." 
        value={message} 
        onChange={onInputChange}
      />

      <button className="social__footer-submit" disabled={!canSubmit}>
        Отправить
      </button>
    </form>
  )
}

const mapDispatchToProps = state => {
  return {
    post: state.posts.current
  }
}

export default connect(mapDispatchToProps)(AddComment);
