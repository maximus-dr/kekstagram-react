import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKR7YBafGi1YTi0CPMGKEpqRwH0Ysimyc",
  authDomain: "fir-ceb07.firebaseapp.com",
  projectId: "fir-ceb07",
  storageBucket: "fir-ceb07.appspot.com",
  messagingSenderId: "444339094743",
  appId: "1:444339094743:web:512c171a7b06925d419c92"
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
