import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBqa0MN0vLkK_hJvDqoaUfAbPvHG97pcbE",
  authDomain: "kekstagram-2741a.firebaseapp.com",
  projectId: "kekstagram-2741a",
  storageBucket: "kekstagram-2741a.appspot.com",
  messagingSenderId: "650046823301",
  appId: "1:650046823301:web:e5bb0a562599140a81c2ec"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();

export default firebaseConfig;
