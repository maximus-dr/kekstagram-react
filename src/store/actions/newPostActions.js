import { storage } from "../../firebase/config";
import { nanoid } from "nanoid";
import { db } from './../../firebase/config';
import { parseISO } from 'date-fns';
var formatISO = require('date-fns/formatISO');



export const uploadNewPostFile = (file, imgSrc) => {
  return { type: 'UPLOAD_NEW_POST_FILE', file, imgSrc }
}

export const submitNewPost = (post) => {
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_NEW_POST_STARTED' });

    const storageRef = storage.ref();
    const fileRef = storageRef.child(post.file.name);
    
    fileRef.put(post.file)
      .then(() => fileRef.getDownloadURL())
      .then(fileUrl => {
        const id = nanoid();
        db.collection('posts').doc(`${id}`).set({
          ...postTemplate,
          id,
          author: {
            id: nanoid(),
            avatar: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
            name: 'Max Ivanov'
          }, 
          img: {
            url: fileUrl
          },
          message: 'Test message',
          description: 'Test description',
          createdAt: formatISO(
            parseISO(new Date().toISOString()), { representation: 'date' }) 
        });
      })
      .then(() => dispatch({ type: 'SUBMIT_NEW_POST_SUCCESS'}));
  }
}

export const closeNewPostForm = () => {
  return { type: 'CLOSE_NEW_POST_FORM' }
}


export const postTemplate = {
  id: '',
  author: {
    id: '',
    avatar: '',
    name: ''
  },
  img: {
    url: ''
  },
  message: '',
  likes: 0,
  description: '',
  comments: [],
  createdAt: ''
}
