import React, { useEffect } from 'react';
import AddPost from '../AddPost/AddPost';
import './Main.scss';
import { connect, useDispatch } from 'react-redux';
import PostList from '../PostList/PostList';
import { fetchPosts } from './../../../store/actions/postsActions';
import MainPreloader from './MainPreloader/MainPreloader';


function Main({ posts }) {
  console.log(posts.status);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  return (
    <div className="main container">
      {posts.status === 'loading' 
        ? <MainPreloader /> 
        : <>
          <PostList posts={posts} />
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
