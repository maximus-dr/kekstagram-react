import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import postReducer from './postsReducer';


const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  posts: postReducer,
  auth: authReducer
});

export default rootReducer;
