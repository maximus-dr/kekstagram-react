
const postReducer = (post = null, action) => {

  switch (action.type) {
    case 'OPEN_POST':
      return {
        ...action.post
      };
    case 'CLOSE_POST':
      return null
    case 'ADD_COMMENT':
      const comments = ([...post.comments, action.comment]);
      return {
        ...post,
        comments
      };
    default:
      return post;
  }
}

export default postReducer;
