const initialState = {
  file: null,
  imgSrc: null
};

const newPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_NEW_POST_FILE': {
      return {
        ...state,
        file: action.file,
        imgSrc: action.imgSrc
      }
    }
    case 'CLOSE_NEW_POST_FORM':
      return {
        ...state,
        file: null,
        imgSrc: null
      };
    default:
      return state
  }
}

export default newPostReducer;
