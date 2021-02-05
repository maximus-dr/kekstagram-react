import { firestoreReducer } from 'redux-firestore';
import postReducer from './postReducer';


const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  post: postReducer
});

export default rootReducer;
