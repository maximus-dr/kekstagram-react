import { storage } from "../../firebase/config";
import { nanoid } from "nanoid";
import { db } from './../../firebase/config';
import { fetchPosts } from './postActions';
import { POST_TEMPLATE } from "../constants";


const postTemplate = POST_TEMPLATE;


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
            avatar: post.avatar,
            name: post.name
          }, 
          img: {
            url: fileUrl,
            style: post.img.style
          },
          message: post.message,
          description: post.description,
          createdAt: new Date().toISOString()
        });
      })
      .then(() => dispatch({ type: 'SUBMIT_NEW_POST_SUCCESS'}))
      .then(() => {
        dispatch({ type: 'SUBMIT_NEW_POST_FINISH'});
        dispatch(closeNewPostForm());
        dispatch(fetchPosts());
      })
      .catch(error => dispatch({ type: 'SUBMIT_NEW_POST_FAILURE', error }));
  }
}

export const closeNewPostForm = () => {
  return { type: 'CLOSE_NEW_POST_FORM' }
}
