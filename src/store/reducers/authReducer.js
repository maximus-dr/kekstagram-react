const initialState = {
  currentUser: null,
  error: null,
  status: 'idle'
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STARTED':
      console.log('auth started');
      return {
        ...state,
        status: 'loading'
      }
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        currentUser: action.user,
        status: 'success',
        error: null
      };
    case 'SIGN_UP_FINISHED':
      return {
        ...state,
        status: 'idle'
      }
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        error: action.error
      }
    case 'LOGIN_SUCCESS':
      console.log('success');
      return {
        ...state,
        currentUser: action.user,
        status: 'success',
        error: null
      }
    case 'LOGIN_FINISHED':
      return {
        ...state,
        status: 'idle'
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: action.error
      }
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default authReducer;