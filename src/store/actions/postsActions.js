import { db } from './../../firebase/config';


export const fetchPosts = () => (dispatch) => {

  dispatch({ type: 'FETCH_POSTS_START' });

  const ids = [];
  const postsList = {};

  db.collection('posts')
    .get()
    .then(snapshot => {
      
      snapshot.docs.forEach(doc => {
        ids.push(doc.id);
        postsList[doc.id] = doc.data();
      });

      dispatch({ type: 'FETCH_POSTS_SUCCESS', postsList, ids })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_POSTS_ERROR', error })
    })
}

export const openPost = (post) => {
  return { type: 'OPEN_POST', post }
}

export const closePost = () => {
  return { type: 'CLOSE_POST' }
}

export const addComment = (comment) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('kekstagram-posts').doc('aGXgvmxEkpsf0gBa2k7X').set({
      comments: [comment]
    })
  }
}
