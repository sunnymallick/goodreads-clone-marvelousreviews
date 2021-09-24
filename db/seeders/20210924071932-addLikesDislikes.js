'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('LikesDislikes', [
        { user_id: 1, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 3, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 4, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 5, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 6, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 7, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 8, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 9, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 10, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 11, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 12, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 3, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 4, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 5, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 6, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 7, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 8, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 9, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 10, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 11, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 12, rating: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 3, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 4, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 5, rating: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 6, rating: true, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('LikesDislikes', null, {});
  }
};
