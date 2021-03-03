import React, {  useEffect, useState } from 'react';
import './PostSocial.scss';
import Comments from './PostComments/Comments';
import PostHeader from './PostHeader/PostHeader';
import AddComment from './PostComments/AddComment';
import CommentsCount from './PostComments/CommentsCount';


//const SHOW_COMMENTS_BY = 5;


export default function PostSocial({ post }) {

  const comments = post.comments;
  
  const [list, setList] = useState(() => {
    let slice = [];
    if (comments.length <= 5) {
      slice = comments.slice();
    } else if (comments.length > 5) {
      slice = comments.slice(0, 5);
    }
    return slice;
  });

  useEffect(() => {
    comments.length > 5
      ? setList(comments.slice(0, 5))
      : setList(comments.slice());
  }, [comments])


  const onLoadMore = () => {
    if (comments.length - list.length > 5) {
      setList(comments.slice(0, list.length + 5));
    } else {
      setList(comments.slice());
    }
  }

  const onHide = () => {
    setList(comments.slice(0, 5));
  }

  return (
    <div className="social">
      <PostHeader post={post} />
      <CommentsCount 
        shown={list.length} 
        total={comments.length} 
      />
      <Comments comments={list} />

      { 
        comments.length > 5 &&
        comments.length - list.length > 0 &&
        <button className="social__loadmore" onClick={onLoadMore}>
          Загрузить еще
        </button>
      }
      { 
        comments.length > 5 &&
        comments.length - list.length === 0 &&
        <button className="social__hide-comments" onClick={onHide}>
          Свернуть
        </button>
      }

      <AddComment />
    </div>
  )
}
