import { auth } from './../../firebase/config';


export const signUp = (email, password) => {
  return async (dispatch, getState) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        dispatch({ type: 'SIGN_UP_SUCCESS', user})
      })
      .catch(err => {
        dispatch({ type: 'SIGN_UP_FAILURE'});
      })
  }
}
