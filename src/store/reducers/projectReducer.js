const initState = {
  posts: [
    {
      id: 1,
      url: "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
      likes: 8,
      avatar: "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
      comments: [
        {
          avatar: "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
          message: "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.",
          name: "Степан"
        }
      ],
      description: "Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;
