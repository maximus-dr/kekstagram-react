import React, { useEffect } from 'react';
import AddPost from '../AddPost/AddPost';
import './Main.scss';
import { connect, useDispatch } from 'react-redux';
import PostsList from '../PostsList/PostsList';
import { fetchPosts } from './../../../store/actions/postActions';
import MainPreloader from './MainPreloader/MainPreloader';
import { Route, useHistory } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import Post from './../Post/Post/Post';
import SignUp from './../../Auth/SignUp/SignUp';
import Login from './../../Auth/Login/Login';


function Main({ posts }) {

  const dispatch = useDispatch();
  const history = useHistory();
  
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

            <Route path="/post/:id" children={({match}) => (
                <Modal close={history.goBack} isOpen={Boolean(match)}>
                  <Post />
                </Modal>
              )} 
            />
            <Route path="/signup" children={({match}) => (
                <Modal close={history.goBack} isOpen={Boolean(match)}>
                  <SignUp />
                </Modal>
              )} 
            />
            <Route path="/login" children={({match}) => (
                <Modal close={history.goBack} isOpen={Boolean(match)}>
                  <Login />
                </Modal>
              )} 
            />
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
