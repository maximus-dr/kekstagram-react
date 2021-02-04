import React from 'react';


export default function PostCloseBtn({ history }) {

  const handleClick = () => {
    history.push('/');
  }

  return (
    <button className="post__close-btn" onClick={handleClick}>Закрыть</button>
  )
}
