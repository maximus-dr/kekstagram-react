const initialState = {
  current: null,
  ids: ['1'],
  list: {
    '1': {
      id: '1',
      avatar: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
      url: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
      message: 'test message',
      likes: 13,
      comments: [
        
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.",
          "name": "Степан"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Непонятен один момент: как так-то?!",
          "name": "Николай"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Горизонт завален.",
          "name": "Харитон"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "В целом всё неплохо. Но не всё.",
          "name": "Тимур"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Шоб я так жил!",
          "name": "Тимур"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.",
          "name": "Харитон"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%",
          "name": "Аким"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Разве это композиция?! Что это за композиция?!",
          "name": "Николай"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Фокус размыт. Или это просто кто-то заляпал объектив?",
          "name": "Аким"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Нормас.",
          "name": "Степан"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
          "name": "Степан"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Всё отлично!",
          "name": "Степан"
        },
        {
          "avatar": "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
          "message": "Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!",
          "name": "Харитон"
        }
      ],
      description: 'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill'
    }
  }
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
