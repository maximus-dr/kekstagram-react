const initialState = {
  file: null,
  status: 'idle',
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
    case 'SUBMIT_NEW_POST_STARTED':
      return {
        ...state,
        status: 'loading'
      }
    case 'SUBMIT_NEW_POST_SUCCESS':
      console.log('success');
      return state;
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
