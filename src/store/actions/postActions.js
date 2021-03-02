import { db } from '../../firebase/config';
import firebase from 'firebase/app';


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

export const like = (id, isLiked) => (dispatch) => {
  const increment = isLiked ? -1 : 1;
  isLiked = !isLiked;
  console.log(isLiked);
  db.collection('posts').doc(id).update({
    likes: firebase.firestore.FieldValue.increment(increment),
    isLiked
  })
  .then(() =>
    dispatch({ type: 'LIKE', id, increment, isLiked })
  )
}
