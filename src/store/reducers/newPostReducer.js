const initialState = {
  uploadImg: null
};

const newPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_NEW_POST_FORM':
      return {
        ...state,
        uploadImg: action.uploadImg
      }
    case 'CLOSE_NEW_POST_FORM':
      return {
        ...state,
        uploadImg: null
      };
    default:
      return state
  }
}

export default newPostReducer;
