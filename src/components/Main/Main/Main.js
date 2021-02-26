import React from 'react';
import AddPost from '../AddPost/AddPost';
import './Main.scss';
import { connect } from 'react-redux';
import PostList from '../PostList/PostList';


function Main({ posts }) {

  if (!posts) {
    return <div>LOADING POSTS...</div>
  }

  return (
    <div className="main container">
      <PostList posts={posts} />
      <AddPost />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps)(Main);
