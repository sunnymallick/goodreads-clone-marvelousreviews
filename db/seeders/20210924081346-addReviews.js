'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      { user_id: 1, movie_id: 1, review: 'Best Movie in the world!!', likeDislikes_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, movie_id: 2, review: 'not my type of movie', likeDislikes_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, movie_id: 3, review: 'I love the plot.', likeDislikes_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, movie_id: 4, review: 'worst movie ever!', likeDislikes_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, movie_id: 5, review: 'I would watch this over and over again.', likeDislikes_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, movie_id: 6, review: 'it is too slow for me.', likeDislikes_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, movie_id: 7, review: 'Great movie with great actors!', likeDislikes_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, movie_id: 8, review: 'it is too slow for me.', likeDislikes_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, movie_id: 9, review: 'Great movie with great actors!', likeDislikes_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, movie_id: 10, review: 'I fell asleep during this movie.', likeDislikes_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, movie_id: 11, review: '5/5⭐ and I love the visuals!', likeDislikes_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, movie_id: 12, review: '6/10 and I was not a fan of the movie.', likeDislikes_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, movie_id: 13, review: 'I can watch this movie all day.', likeDislikes_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, movie_id: 14, review: '4/10 and I did not like it that much.', likeDislikes_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, movie_id: 15, review: 'Finally a movie I can watch!!', likeDislikes_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, movie_id: 16, review: 'This movie is not the best marvel can do.', likeDislikes_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, movie_id: 17, review: 'I would recommend this to all marvel fans!', likeDislikes_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, movie_id: 18, review: 'I do not recommend this to anyone.', likeDislikes_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, movie_id: 19, review: 'Thumbs up on this movie and I fell in love with what Marvel did with this movie.', likeDislikes_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, movie_id: 20, review: 'not much for me 👎', likeDislikes_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, movie_id: 21, review: 'I bought this movie on Blu-ray because I love it.', likeDislikes_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, movie_id: 22, review: 'I only watched this movie once and did not want to watch it again.', likeDislikes_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, movie_id: 23, review: '👍 best movie I have seen in years.', likeDislikes_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, movie_id: 24, review: 'do not bother with this movie, just skip it!', likeDislikes_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, movie_id: 25, review: 'LOVE THIS MOVIE!!!', likeDislikes_id: 25, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, movie_id: 1, review: 'I love this movie!!', likeDislikes_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, movie_id: 2, review: 'I would watch this over and over and not be bored!', likeDislikes_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, movie_id: 3, review: 'Great movie with great director.', likeDislikes_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, movie_id: 4, review: 'Best Movie in the Marvel Universe.', likeDislikes_id: 29, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, movie_id: 5, review: 'how can you not love this movie! 5/5 stars!', likeDislikes_id: 30, createdAt: new Date(), updatedAt: new Date() },

      { user_id: 7, movie_id: 6, review: 'how can you not love this movie! 5/5 stars!', likeDislikes_id: 31, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, movie_id: 7, review: 'Best Movie in the World.', likeDislikes_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, movie_id: 8, review: 'No doubt that this is the best Marvel movie in the whole lineup.', likeDislikes_id: 33, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, movie_id: 9, review: 'This actually turned out to be a really good movie. this caught me off guard.', likeDislikes_id: 34, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, movie_id: 10, review: 'I would watch this over and over again with the volume turn to 11.', likeDislikes_id: 35, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, movie_id: 11, review: 'I like the attempted by Marvel to go different with this movie.', likeDislikes_id: 36, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, movie_id: 12, review: 'A good movie is not defined by the visuals but it is defined by the story.', likeDislikes_id: 37, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, movie_id: 13, review: 'I own this movie at home and have it to my collection', likeDislikes_id: 38, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, movie_id: 14, review: 'Buy this movie or if you have Disney Plus watch it!!', likeDislikes_id: 39, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, movie_id: 15, review: 'I watch this one with my kids all the time.', likeDislikes_id: 40, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, movie_id: 16, review: 'I like the way Marvel always intergrates the stories together 5/5', likeDislikes_id: 41, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, movie_id: 17, review: 'This movie as okay but it is still a movie to checkout.', likeDislikes_id: 42, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, movie_id: 18, review: '4/5 stars. this was a great attempt by Marvel.', likeDislikes_id: 43, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, movie_id: 19, review: 'I LOVE THIS MOVIE!', likeDislikes_id: 44, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, movie_id: 20, review: 'The best movie out of all the Marvel line up for sure!', likeDislikes_id: 45, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, movie_id: 21, review: 'I like how the story keeps you sucked in because of that I think this is the best one!', likeDislikes_id: 46, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, movie_id: 22, review: 'Keeps me wondering what is going to happen in phase 4??', likeDislikes_id: 47, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, movie_id: 23, review: 'I watch this on Disney plus all the time!', likeDislikes_id: 48, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, movie_id: 24, review: 'I keep watching this over and over. It is a great story.', likeDislikes_id: 49, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, movie_id: 25, review: 'I love this Movie and you can not change my mind!!', likeDislikes_id: 50, createdAt: new Date(), updatedAt: new Date() },


    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
