import React from 'react';
import AddPost from './AddPost/AddPost';
import './Main.scss';
import { connect } from 'react-redux';
import PostList from './PostList/PostList';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';

function Main(props) {

  const posts = [
    {
      id: '1',
      avatar: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
      url: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
      message: 'test message',
      comments: []
    }
  ];

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

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { collection: 'kekstagram-posts' }
//   ])
// )(Main);

export default connect(mapStateToProps)(Main);
