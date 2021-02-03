import React from 'react';
import AddPost from './AddPost/AddPost';
import './Main.scss';
import { connect } from 'react-redux';

function Main(props) {
  console.log(props);
  return (
    <div className="main container">
      <AddPost />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Main);
