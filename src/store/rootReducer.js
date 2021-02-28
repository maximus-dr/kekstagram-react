import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './reducers/authReducer';
import newPostReducer from './reducers/newPostReducer';
import postReducer from './reducers/postsReducer';


const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  posts: postReducer,
  auth: authReducer,
  newPost: newPostReducer
});

export default rootReducer;
