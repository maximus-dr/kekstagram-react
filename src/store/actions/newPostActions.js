import { storage } from "../../firebase/config";
import { nanoid } from "nanoid";
import { db } from './../../firebase/config';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { fetchPosts } from './postsActions';


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
            url: fileUrl
          },
          message: post.message,
          description: post.description,
          createdAt: formatDistanceToNow(
            parseISO(new Date().toISOString()), { representation: 'date' }) 
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
  isLiked: false,
  description: '',
  comments: [],
  createdAt: ''
}
