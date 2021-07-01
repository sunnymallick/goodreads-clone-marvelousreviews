'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MovieShelves', [], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('MovieShelves', null, {});
  }
};
