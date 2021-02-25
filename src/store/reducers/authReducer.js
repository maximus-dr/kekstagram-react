const initialState = {
  currentUser: null,
  error: null,
  signupError: null,
  loginError: null,
  status: 'idle'
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STARTED':
      return {
        ...state,
        status: 'loading'
      }

    // SIGN UP
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        currentUser: action.user,
        status: 'success',
        signupError: null
      };
    case 'SIGN_UP_FINISHED':
      return {
        ...state,
        status: 'idle'
      }
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        signupError: action.error,
        status: 'error'
      }
    case 'CLEANUP_SIGN_UP_ERROR':
      return {
        ...state,
        signupError: null,
        status: 'idle'
      }

    // LOGIN
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        currentUser: action.user,
        status: 'success',
        loginError: null
      }
    case 'LOGIN_FINISHED':
      return {
        ...state,
        status: 'idle'
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loginError: action.error,
        status: 'error'
      }
    case 'CLEANUP_LOGIN_ERROR':
      return {
        ...state,
        status: 'idle',
        loginError: null
      }

    // LOGOUT
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        error: action.error,
        status: 'idle'
      }
    default:
      return state;
  }
}

export default authReducer;