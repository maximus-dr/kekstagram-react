import { auth } from './../../firebase/config';


export const signUp = (email, password) => {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        dispatch({ type: 'SIGN_UP_SUCCESS', user});

      })
      .catch(error => {
        dispatch({ type: 'SIGN_UP_FAILURE', error});
      })
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        dispatch({ type: 'LOGIN_SUCCESS', user });
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_FAILURE', error });
      })
  }
}
