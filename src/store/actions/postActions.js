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
