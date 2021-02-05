
const postReducer = (state = null, action) => {

  switch (action.type) {
    case 'OPEN_POST':
      return {
        ...action.post
      };
    case 'CLOSE_POST':
      return null
    default:
      return state;
  }
}

export default postReducer;
