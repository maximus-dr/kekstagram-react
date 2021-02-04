import React from 'react'

export default function AddComment() {
  return (
    <div className="social__footer">
      <img className="social__comment-img" src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="avatar" width="35" height="35" />
      <input className="social__footer-text" type="text" placeholder="Ваш комментарий..." />
      <button className="social__footer-submit">Отправить</button>
    </div>
  )
}
