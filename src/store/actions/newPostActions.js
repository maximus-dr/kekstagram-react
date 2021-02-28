import { storage } from "../../firebase/config";
import { nanoid } from "nanoid";
import { db } from './../../firebase/config';

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
        db.collection('posts').doc(`${id}`).set({ image: fileUrl });
      })
      .then(() => dispatch({ type: 'SUBMIT_NEW_POST_SUCCESS'}));
  }
}

export const closeNewPostForm = () => {
  return { type: 'CLOSE_NEW_POST_FORM' }
}


