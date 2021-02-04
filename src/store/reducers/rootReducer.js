import postReducer from "./postReducer";
import { firestoreReducer } from 'redux-firestore';


const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  posts: postReducer,
  firestore: firestoreReducer
});

export default rootReducer;
