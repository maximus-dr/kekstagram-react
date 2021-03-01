const initialState = {
  status: 'idle',
  current: null,
  ids: [],
  list: {}
};


const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_POSTS_START':
      return {
        ...state,
        error: null,
        status: 'loading'
      }
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        list: action.postsList,
        ids: action.ids,
        status: 'success'
      }
    case 'FETCH_POSTS_ERROR':
      return {
        ...state,
        error: action.error,
        status: 'error'
      }
    case 'OPEN_POST':
      return {
        ...state,
        current: action.post
      };
    case 'CLOSE_POST':
      return {
        ...state,
        current: null
      }
    default:
      return state;
  }
}

export default postReducer;
