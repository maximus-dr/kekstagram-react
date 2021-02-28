import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import firebaseConfig from './firebase/config';
import { createFirestoreInstance } from 'redux-firestore';
import Loader from './components/Modal/Loader/Loader';


const reactReduxFiresbaseProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <Loader isOpen={true} />
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFiresbaseProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
