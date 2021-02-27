export const openNewPost = (uploadImg) => {
  return { type: 'OPEN_NEW_POST_FORM', uploadImg }
}

export const closeNewPost = () => {
  return { type: 'CLOSE_NEW_POST_FORM' }
}
