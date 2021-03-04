import React, {  useEffect, useState } from 'react';
import './PostSocial.scss';
import Comments from './PostComments/Comments';
import PostHeader from './PostHeader/PostHeader';
import AddComment from './PostComments/AddComment';
import CommentsCount from './PostComments/CommentsCount';


const SHOW_COMMENTS_BY = 5;


export default function PostSocial({ post }) {

  const comments = post.comments.sort((a, b) => {
    return b.createdAt.localeCompare(a.createdAt);
  });

  const step = SHOW_COMMENTS_BY;
  
  const [list, setList] = useState(() => {
    let slice = [];
    if (comments.length <= step) {
      slice = comments.slice();
    } else if (comments.length > step) {
      slice = comments.slice(0, step);
    }
    return slice;
  });

  useEffect(() => {
    comments.length > step
      ? setList(comments.slice(0, step))
      : setList(comments.slice());
  }, [comments, step])


  const onLoadMore = () => {
    if (comments.length - list.length > step) {
      setList(comments.slice(0, list.length + step));
    } else {
      setList(comments.slice());
    }
  }

  const onHide = () => {
    setList(comments.slice(0, step));
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
        comments.length > step &&
        comments.length - list.length > 0 &&
        <button className="social__loadmore" onClick={onLoadMore}>
          Загрузить еще
        </button>
      }
      { 
        comments.length > step &&
        comments.length - list.length === 0 &&
        <button className="social__hide-comments" onClick={onHide}>
          Свернуть
        </button>
      }

      <AddComment />
    </div>
  )
}
