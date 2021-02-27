import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import newPostReducer from './newPostReducer';
import postReducer from './postsReducer';


const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  posts: postReducer,
  auth: authReducer,
  newPost: newPostReducer
});

export default rootReducer;
