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
  comments: [
    {
      id: '',
      author: {
        id: '',
        avatar: '',
        name: ''
      },
      message: '',
      createdAt: ''
    }
  ],
  createdAt: ''
}


export const openPost = (post) => {
  return { type: 'OPEN_POST', post };
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
