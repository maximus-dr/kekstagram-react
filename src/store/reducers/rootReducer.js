import { firestoreReducer } from 'redux-firestore';


const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  firestore: firestoreReducer
});

export default rootReducer;
