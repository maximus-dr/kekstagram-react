const initialState = {
  file: null,
  status: 'idle',
  imgSrc: null,
  error: null
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
      return {
        ...state,
        status: 'success'
      };
    case 'SUBMIT_NEW_POST_FINISH':
      return {
        ...state,
        status: 'idle'
      }
    case 'SUBMIT_NEW_POST_FAILURE':
      return {
        ...state,
        error: action.error
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
