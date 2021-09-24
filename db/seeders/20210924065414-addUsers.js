'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      { username: 'DemoUser', email: 'demouser@demo.com', password: 'password', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Stark12', email: 'stark12@demo.com', password: 'password1', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Banner11', email: 'hulksmash@demo.com', password: 'password2', createdAt: new Date(), updatedAt: new Date() },
      { username: 'FirstAvenger1', email: 'capamer1@demo.com', password: 'password3', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Thanos99', email: 'infinityG@demo.com', password: 'password4', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Thor79', email: 'thundergod@demo.com', password: 'password5', createdAt: new Date(), updatedAt: new Date() },
      { username: 'DrStrange55', email: 'multiverse@demo.com', password: 'password6', createdAt: new Date(), updatedAt: new Date() },
      { username: 'PParker25', email: 'spidey@demo.com', password: 'password7', createdAt: new Date(), updatedAt: new Date() },
      { username: 'StarLord001', email: 'mixtape@demo.com', password: 'password8', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Groot36', email: 'iamgroot@demo.com', password: 'password9', createdAt: new Date(), updatedAt: new Date() },
      { username: 'marvelOne', email: 'capmarvel@demo.com', password: 'password10', createdAt: new Date(), updatedAt: new Date() },
      { username: 'Widow10', email: 'blackwidow@demo.com', password: 'password11', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
