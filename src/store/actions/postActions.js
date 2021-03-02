import { db } from '../../firebase/config';
import firebase from 'firebase/app';
import { nanoid } from 'nanoid';


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
  db.collection('posts').doc(id).update({
    likes: firebase.firestore.FieldValue.increment(increment),
    isLiked
  })
  .then(() =>
    dispatch({ type: 'LIKE', id, increment, isLiked })
  )
}

export const addComment = (message, post) => (dispatch) => {
  const comment = {
    ...commentTemplate,
    id: nanoid(),
    message,
    createdAt: new Date().toISOString()
  }
  const comments = [...post.comments, comment];

  db.collection('posts').doc(post.id).update({
    comments
  })
    .then(() => dispatch({ type: 'ADD_COMMENT_SUCCESS', comments, postId: post.id }))
    .catch(error => dispatch({ type: 'ADD_COMMETN_ERROR', error }))
}


const commentTemplate = {
  id: '',
  author: {
    avatarUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
    name: 'Max Ivanov'
  },
  message: '',
  createdAt: ''
}
