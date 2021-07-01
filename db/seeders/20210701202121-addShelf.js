'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MovieShelves', [
        { user_id: 1, title: "Iron Man", movieImg: 'https://64.media.tumblr.com/c8b74130f4ddf0dc12aa053aa2be9591/tumblr_pqgxnkSlhI1tk4n0bo1_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Captain America: The Winter Soldier", movieImg: 'https://64.media.tumblr.com/d9750c4fd8e54b6bf6250a433295e976/tumblr_pqh4c7ovcT1tk4n0bo3_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Doctor Strange", movieImg: 'https://64.media.tumblr.com/9610de482942e65e40821799731a701d/tumblr_pqh51uqeDE1tk4n0bo2_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Guardians Of The Galaxy Vol. 2", movieImg: 'https://64.media.tumblr.com/0be5949a3c14ab4123e0756804b4b644/tumblr_pqh55c2eQC1tk4n0bo1_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Spider-Man: Homecoming", movieImg: 'https://i.pinimg.com/originals/e6/a2/5a/e6a25a2855e741f7461fe1698db3153a.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Thor: Ragnarok", movieImg: 'https://64.media.tumblr.com/a8c2c4b47a9b427a960570f2b408f93f/tumblr_pqh5f4qs5f1tk4n0bo1_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Black Panther", movieImg: 'https://64.media.tumblr.com/c7db12620e7652b2210f02481018d42f/tumblr_pqh5j2Zq7D1tk4n0bo1_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Avengers: Infinity War", movieImg: 'https://64.media.tumblr.com/f32839a796719640133271f4932f0191/tumblr_pqh5kweBbT1tk4n0bo2_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Ant-Man And The Wasp", movieImg: 'https://64.media.tumblr.com/760012c4acb29e88ccff5010ad386af8/tumblr_pqh5ohuySf1tk4n0bo2_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { user_id: 1, title: "Avengers: Endgame", movieImg: 'https://64.media.tumblr.com/080f4dc6cb987db2973670dc4b1e2281/tumblr_pqh5vunEKi1tk4n0bo2_1280.jpg', createdAt: new Date(), updatedAt: new Date()},], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('MovieShelves', null, {});
  }
};
