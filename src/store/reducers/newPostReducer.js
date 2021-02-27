const initialState = {
  data: null,
  imgSrc: null
};

const newPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_NEW_POST_FILE': {
      return {
        ...state,
        data: action.data,
        imgSrc: action.imgSrc
      }
    }
    case 'CLOSE_NEW_POST_FORM':
      return {
        ...state,
        data: null,
        imgSrc: null
      };
    default:
      return state
  }
}

export default newPostReducer;
