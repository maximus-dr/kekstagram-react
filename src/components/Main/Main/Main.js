import React, { useEffect } from 'react';
import AddPost from '../AddPost/AddPost';
import './Main.scss';
import { connect, useDispatch } from 'react-redux';
import PostsList from '../PostsList/PostsList';
import { fetchPosts } from './../../../store/actions/postActions';
import MainPreloader from './MainPreloader/MainPreloader';


function Main({ posts }) {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  return (
    <div className="main container">
      {
        posts.status === 'loading' 
          ? <MainPreloader /> 
          : <>
            <PostsList posts={posts} />
            <AddPost />
          </> 
      }
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}


export default connect(mapStateToProps)(Main);
