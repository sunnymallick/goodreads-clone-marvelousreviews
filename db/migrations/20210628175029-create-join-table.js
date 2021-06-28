'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JoinTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieShelf_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'MovieShelves' }
      },
      movie_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Movies' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JoinTables');
  }
};
