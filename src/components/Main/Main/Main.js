import React from 'react';
import AddPost from '../AddPost/AddPost';
import './Main.scss';
import { connect, useSelector } from 'react-redux';
import PostList from '../PostList/PostList';


function Main(props) {

  const posts = useSelector(state => state.posts.list);

  if (posts) {
    return (
      <div className="main container">
        <PostList posts={posts} />
        <AddPost />
      </div>
    );
  } else {
    return <div>LOADING POSTS...</div>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered['kekstagram-posts']
  }
}


export default connect(mapStateToProps)(Main);
