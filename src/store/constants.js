export const NEW_POST_RESIZE = {
  default: 100,
  min: 50,
  max: 150,
  step: 25,
}

export const NEW_POST_EFFECTS = {
  none: {
    filter: 'none'
  },
  chrome: {
    filter: 'grayscale',
    max: 1
  },
  sepia: {
    filter: 'sepia',
    max: 1
  },
  marvin: {
    filter: 'invert',
    max: 100,
    unit: '%'
  },
  phobos: {
    filter: 'blur',
    max: 3,
    unit: 'px'
  },
  heat: {
    filter: 'brightness',
    max: 3
  }
};

export const SHOW_COMMENTS_BY = 5;

export const POST_TEMPLATE = {
  id: '',
  author: {
    id: '',
    avatar: '',
    name: ''
  },
  img: {
    url: '',
    style: ''
  },
  message: '',
  likes: 0,
  isLiked: false,
  description: '',
  comments: [],
  createdAt: ''
}

export const COMMENT_TEMPLATE = {
  id: '',
  author: {
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/kekstagram-2741a.appspot.com/o/avatar.jpg?alt=media&token=31eb2327-3e13-474a-b9a6-14da17a4b1da',
    // dummy data
    name: 'Max Ivanov'
  },
  message: '',
  createdAt: ''
}
