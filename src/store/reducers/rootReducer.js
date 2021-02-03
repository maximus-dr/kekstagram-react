import projectReducer from "./projectReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  posts: projectReducer
});

export default rootReducer;
