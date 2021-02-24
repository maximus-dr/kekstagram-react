import { auth } from './config';


export const signup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
}
