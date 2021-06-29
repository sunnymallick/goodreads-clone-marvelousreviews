'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Movies', [
        { name: "Ant-Man", releaseYear: '2015', director: ['Peyton Reed'], cast: ['Paul Rudd', 'Michael Douglas', 'Corey Stoll', 'Evangeline Lilly'], movieImg:''},
        { name: "Ant-Man And The Wasp", releaseYear: '2018', director: ['Peyton Reed'], cast: ['Paul Rudd', 'Evangeline Lilly', 'Michael Pena', 'Walton Goggins'], movieImg: ''},
        { name: "Avengers: Age of Ultron", releaseYear: '2015', director: ['Joss Whedon'], cast: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'], movieImg: ''},
        { name: "Avengers: Endgame", releaseYear: '2019', director: ['Anthony Russo', 'Joe Russo'], cast: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'], movieImg: ''},
        { name: "Avengers: Infinity War", releaseYear: '2018', director: ['Anthony Russo', 'Joe Russo'], cast: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'], movieImg: ''},
        { name: "Black Panther", releaseYear: '2018', director: ['Ryan Coogler'], cast: ['Chadwick Boseman', 'Michael B. Jordan', "Lupita Nyong'o", 'Danai Gurira'], movieImg: ''},
        { name: "Captain America: Civil War", releaseYear: '2016', director: ['Anthony Russo', 'Joe Russo'], cast: ['Chris Evans', 'Robert Downey Jr', 'Scarlett Johansson', 'Sebastian Stan'], movieImg: ''},
        { name: "Captain America: The First Avenger", releaseYear: '2011', director: ['Joe Johnston'], cast: ['Chris Evans', 'Hugo Weaving', 'Samuel L Jackson', 'Hayley Atwell' ], movieImg: ''},  
        { name: "Captain America: The Winter Soldier", releaseYear: '2014', director: ['Anthony Russo', 'Joe Russo'], cast: ['Chris Evans', 'Samuel L Jackson', 'Scarlett Johansson', 'Robert Redford'], movieImg: ''},        
        { name: "Captain Marvel", releaseYear: '2019', director: ['Anna Boden', 'Ryen Fleck'], cast: ['Brie Larson', 'Samuel L Jackson', 'Ben Mendelsohn', 'Jude Law'], movieImg: ''},
        { name: "Doctor Strange", releaseYear: '2016', director: ['Scott Derrickson'], cast: ['Benedict Comberbatch', 'Chiwetel Ejiofor', 'Rachel McAdams', 'Benedict Wong'], movieImg: ''},
        { name: "Guardians Of The Galaxy", releaseYear: '2014', director: ['James Gunn'], cast: ['Chris Pratt', 'Vin Diesel', ], movieImg:''},
        { name: "Guardians Of The Galaxy Vol 2", releaseYear: '2017', director: ['James Gunn'], cast: [], movieImg: ''},
        { name: "Ironman", releaseYear: '2008', director: ['Jon Favreau'], cast: [], movieImg: ''},
        { name: "Ironman 2", releaseYear: '2010', director: ['Jon Favreau'], cast: [], movieImg: ''},
        { name: "Ironman 3", releaseYear: '2013', director: ['Shane Black'], cast: [], movieImg: ''},
        { name: "Spider-Man: Far From Home", releaseYear: '2019', director: ['Jon Watts'], cast: [], movieImg: ''},
        { name: "Spider-Man: Homecoming", releaseYear: '2017', director: ['Jon Watts'], cast: [], movieImg: ''},
        { name: "The Avengers", releaseYear: '2012', director: ['Joss Whedon'], cast: [], movieImg: ''},
        { name: "The Incredible Hulk", releaseYear: '2008', director: ['Louis Leterrier'], cast: [], movieImg: ''},
        { name: "Thor", releaseYear: '2011', director: ['Kenneth Branagh'], cast: [], movieImg: ''},
        { name: "Thor: Ragnarok", releaseYear: '2017', director: ['Taika Watiti'], cast: [], movieImg: ''},
        { name: "Thor: The Dark World", releaseYear: '2013', director: ['Alan Taylor'], cast: [], movieImg: ''},], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
