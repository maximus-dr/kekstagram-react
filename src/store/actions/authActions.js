import { auth } from './../../firebase/config';


export const signUp = (email, password) => {
  return (dispatch) => {
    dispatch(authStarted());

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        dispatch({ type: 'SIGN_UP_SUCCESS', user});

      })
      .then(() => {
        dispatch({ type: 'SIGN_UP_FINISHED'});
      })
      .catch(error => {
        dispatch({ type: 'SIGN_UP_FAILURE', error});
      })
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(authStarted());

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        dispatch({ type: 'LOGIN_SUCCESS', user });
      })
      .then(() => {
        dispatch({ type: 'LOGIN_FINISHED' });
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_FAILURE', error });
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    auth.signOut()
      .then(() => {
        dispatch({ type: 'LOG_OUT'})
      })
      .catch(error => {
        dispatch({ type: 'LOG_OUT_FAILURE', error})
      })
  }
}

const authStarted = () => ({
  type: 'AUTH_STARTED'
});
