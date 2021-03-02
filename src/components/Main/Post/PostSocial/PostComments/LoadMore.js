import React from 'react'

export default function LoadMore({ comments, commentsShown, onLoadMore, onHide }) {
  return (
    <>
      { 
        comments.length - commentsShown > 0
          ? (
            <button className="social__loadmore" onClick={onLoadMore} >
              Загрузить еще
            </button>
          )
          : (
            <button className="social__hide-comments" onClick={onHide}>
              Свернуть
            </button>
          )
      }
    </>
  )
}
