'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MovieShelves', [
        { userId: 1, title: "Iron Man", movieImg: 'https://64.media.tumblr.com/c8b74130f4ddf0dc12aa053aa2be9591/tumblr_pqgxnkSlhI1tk4n0bo1_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Captain America: The Winter Soldier", movieImg: 'https://64.media.tumblr.com/d9750c4fd8e54b6bf6250a433295e976/tumblr_pqh4c7ovcT1tk4n0bo3_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Doctor Strange", movieImg: 'https://64.media.tumblr.com/9610de482942e65e40821799731a701d/tumblr_pqh51uqeDE1tk4n0bo2_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Guardians Of The Galaxy Vol. 2", movieImg: 'https://64.media.tumblr.com/0be5949a3c14ab4123e0756804b4b644/tumblr_pqh55c2eQC1tk4n0bo1_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Spider-Man: Homecoming", releaseYear: '2017', director: "Jon Watts", cast: "Tom Holland, Michael Keaton, Zendaya, Robert Downey Jr, Marisa Tomei", tagline: 'Homework Can Wait. The City Can\'t.', description: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and, movieImg: 'https://i.pinimg.com/originals/e6/a2/5a/e6a25a2855e741f7461fe1698db3153a.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Thor: Ragnarok", releaseYear: '2017', director: "Taika Watiti", cast: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Mark Ruffalo", tagline: 'Thunder Will Reign.', description: 'Imprisoned on the planet Sakaar, Thor must race against time to return to As, movieImg: 'https://64.media.tumblr.com/a8c2c4b47a9b427a960570f2b408f93f/tumblr_pqh5f4qs5f1tk4n0bo1_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Black Panther", releaseYear: '2018', director: "Ryan Coogler", cast: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong\'o, Danai Gurira", tagline: 'Long Live the King.', description: 'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead , movieImg: 'https://64.media.tumblr.com/c7db12620e7652b2210f02481018d42f/tumblr_pqh5j2Zq7D1tk4n0bo1_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Avengers: Infinity War", releaseYear: '2018', director: "Anthony Russo, Joe Russo", cast: "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth", tagline: 'Destiny Arrives.', description: 'The Avengers and their allies must be willing to sacrifice all i, movieImg: 'https://64.media.tumblr.com/f32839a796719640133271f4932f0191/tumblr_pqh5kweBbT1tk4n0bo2_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Ant-Man And The Wasp", releaseYear: '2018', director: "Peyton Reed", cast: "Paul Rudd, Evangeline Lilly, Michael Pena, Walton Goggins", tagline: 'Real Heroes. Not Actual Size.', description: 'As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission tha, movieImg: 'https://64.media.tumblr.com/760012c4acb29e88ccff5010ad386af8/tumblr_pqh5ohuySf1tk4n0bo2_1280.jpg', createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, title: "Avengers: Endgame", releaseYear: '2019', director: "Anthony Russo, Joe Russo", cast: "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth", tagline: 'Avenge the Fallen.', description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining , movieImg: 'https://64.media.tumblr.com/080f4dc6cb987db2973670dc4b1e2281/tumblr_pqh5vunEKi1tk4n0bo2_1280.jpg', createdAt: new Date(), updatedAt: new Date()},], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('MovieShelves', null, {});
  }
};
