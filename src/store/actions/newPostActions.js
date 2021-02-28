export const uploadNewPostFile = (file, imgSrc) => {
  return { type: 'UPLOAD_NEW_POST_FILE', file, imgSrc }
}

export const closeNewPostForm = () => {
  return { type: 'CLOSE_NEW_POST_FORM' }
}


