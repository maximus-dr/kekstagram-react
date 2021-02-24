const initialState = {
  list: [
    {
      id: '1',
      avatar: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
      url: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
      message: 'test message',
      comments: [
        
        {
          "avatar": "assets/img/avatar-6.svg",
          "message": "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.",
          "name": "Степан"
        },
        {
          "avatar": "assets/img/avatar-1.svg",
          "message": "Непонятен один момент: как так-то?!",
          "name": "Николай"
        },
        {
          "avatar": "assets/img/avatar-4.svg",
          "message": "Горизонт завален.",
          "name": "Харитон"
        },
        {
          "avatar": "assets/img/avatar-5.svg",
          "message": "В целом всё неплохо. Но не всё.",
          "name": "Тимур"
        },
        {
          "avatar": "assets/img/avatar-5.svg",
          "message": "Шоб я так жил!",
          "name": "Тимур"
        },
        {
          "avatar": "assets/img/avatar-4.svg",
          "message": "Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.",
          "name": "Харитон"
        },
        {
          "avatar": "assets/img/avatar-2.svg",
          "message": "Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%",
          "name": "Аким"
        },
        {
          "avatar": "assets/img/avatar-1.svg",
          "message": "Разве это композиция?! Что это за композиция?!",
          "name": "Николай"
        },
        {
          "avatar": "assets/img/avatar-2.svg",
          "message": "Фокус размыт. Или это просто кто-то заляпал объектив?",
          "name": "Аким"
        },
        {
          "avatar": "assets/img/avatar-6.svg",
          "message": "Нормас.",
          "name": "Степан"
        },
        {
          "avatar": "assets/img/avatar-6.svg",
          "message": "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
          "name": "Степан"
        },
        {
          "avatar": "assets/img/avatar-6.svg",
          "message": "Всё отлично!",
          "name": "Степан"
        },
        {
          "avatar": "assets/img/avatar-4.svg",
          "message": "Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!",
          "name": "Харитон"
        }
      ],
      description: 'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill'
    }
  ],
  current: null
};


const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'OPEN_POST':
      return {
        ...state,
        current: {...action.post}
      };
    case 'CLOSE_POST':
      return {
        ...state,
        current: null
      }
    default:
      return state;
  }
}

export default postReducer;
