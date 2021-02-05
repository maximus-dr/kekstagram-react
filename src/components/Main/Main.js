import React from 'react';
import AddPost from './AddPost/AddPost';
import './Main.scss';
import { connect } from 'react-redux';
import PostList from './PostList/PostList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function Main({ posts }) {

  const content = posts
    ? (
      <div className="main container">
        <PostList posts={posts} />
        <AddPost />
      </div>
      )
    : <div>LOADING POSTS...</div>

  return <>{content}</>
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered['kekstagram-posts']
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'kekstagram-posts' }
  ])
)(Main);
