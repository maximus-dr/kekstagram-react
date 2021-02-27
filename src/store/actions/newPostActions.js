export const uploadNewPostFile = (data, imgSrc) => {
  return { type: 'UPLOAD_NEW_POST_FILE', data, imgSrc }
}

export const closeNewPostForm = () => {
  return { type: 'CLOSE_NEW_POST_FORM' }
}


