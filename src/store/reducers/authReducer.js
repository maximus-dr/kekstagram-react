const initialState = {
  currentUser: null,
  error: null
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        currentUser: action.user,
        error: null
      };
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        error: action.error
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        currentUser: action.user,
        error: null
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default authReducer;