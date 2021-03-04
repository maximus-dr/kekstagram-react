import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

let initialState = {}

try {
  initialState = sessionStorage.getItem('kekstagram')
    ? JSON.parse(sessionStorage.getItem('kekstagram'))
    : {}
} catch (error) {
  console.log('getError', error);
}

const sessionSaver = store => next => action => {
  let result = next(action);
  let stateToSave = store.getState();
  sessionStorage.setItem('kekstagram', JSON.stringify({...stateToSave}));

  return result;
}


const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk, sessionSaver)
  )
);

export default store;
