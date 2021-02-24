const initialState = {
  currentUser: null
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        currentUser: action.user
      };
    default:
      return state;
  }
}

export default authReducer;