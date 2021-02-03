import postReducer from "./postReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  posts: postReducer
});

export default rootReducer;
