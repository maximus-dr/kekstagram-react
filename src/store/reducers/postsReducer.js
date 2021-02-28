import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const initialState = {
  current: null,
  ids: ['1'],
  list: {
    '1': {
      id: '1',
      author: {
        id: 'FLKFKlsdfkLFK2134',
        avatar: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg',
        name: 'Max Ivanov'
      },
      img: {
        url: 'https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg'
      },
      message: 'test message',
      likes: 13,
      comments: [
        
        {
          "id" : "03jf04jf",
          author: {
            id: 'DSGDFASDFASF3243',
            avatar: "https://img.gazeta.ru/files3/221/12383221/Depositphotos_39437561_l-2015-pic905-895x505-41961.jpg",
            name: 'Stepan'
          },
          message: "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.",
          createdAt: formatDistanceToNow(
            parseISO(new Date().toISOString()), { representation: 'date' })
        },
  
      ],
      description: 'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
      createdAt: formatDistanceToNow(
        parseISO(new Date().toISOString()), { representation: 'date' })
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
