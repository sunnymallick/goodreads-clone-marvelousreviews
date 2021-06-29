'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Movies', [
        { name: "Ant-Man", releaseYear: '2015', director: ['Peyton Reed'], cast: ['Paul Rudd', 'Michael Douglas', 'Corey Stoll', 'Evangeline Lilly'], movieImg:'https://images-na.ssl-images-amazon.com/images/I/71E9abm2ayL._AC_SL1111_.jpg'},
        { name: "Ant-Man And The Wasp", releaseYear: '2018', director: ['Peyton Reed'], cast: ['Paul Rudd', 'Evangeline Lilly', 'Michael Pena', 'Walton Goggins'], movieImg: 'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'},
        { name: "Avengers: Age of Ultron", releaseYear: '2015', director: ['Joss Whedon'], cast: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'], movieImg: 'https://cultureposters.com/wp-content/uploads/2019/04/avengers-2.jpg'},
        { name: "Avengers: Endgame", releaseYear: '2019', director: ['Anthony Russo', 'Joe Russo'], cast: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'], movieImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ae_digital_packshot.jpg'},
        { name: "Avengers: Infinity War", releaseYear: '2018', director: ['Anthony Russo', 'Joe Russo'], cast: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'], movieImg: 'https://i.pinimg.com/originals/72/fc/a7/72fca72b95cef647b2dde1bd67a79049.jpg'},
        { name: "Black Panther", releaseYear: '2018', director: ['Ryan Coogler'], cast: ['Chadwick Boseman', 'Michael B. Jordan', "Lupita Nyong'o", 'Danai Gurira'], movieImg: 'https://valleydailypost.com/wp-content/uploads/2018/02/black_panther___mock_movie_poster_by_bryanunderwood-db0qo1y.jpg'},
        { name: "Captain America: Civil War", releaseYear: '2016', director: ['Anthony Russo', 'Joe Russo'], cast: ['Chris Evans', 'Robert Downey Jr', 'Scarlett Johansson', 'Sebastian Stan'], movieImg: 'https://i.pinimg.com/originals/5f/e4/6a/5fe46a8b6bc43cc3072bc38a3adaca0f.jpg'},
        { name: "Captain America: The First Avenger", releaseYear: '2011', director: ['Joe Johnston'], cast: ['Chris Evans', 'Hugo Weaving', 'Samuel L Jackson', 'Hayley Atwell' ], movieImg: 'https://mypostercollection.com/wp-content/uploads/2018/08/Captain-America-Poster-2011-MyPosterCollection.com-1-683x1024.jpg'},  
        { name: "Captain America: The Winter Soldier", releaseYear: '2014', director: ['Anthony Russo', 'Joe Russo'], cast: ['Chris Evans', 'Samuel L Jackson', 'Scarlett Johansson', 'Robert Redford'], movieImg: 'https://images-na.ssl-images-amazon.com/images/I/71FXNj0ER5L._AC_SL1500_.jpg'},        
        { name: "Captain Marvel", releaseYear: '2019', director: ['Anna Boden', 'Ryen Fleck'], cast: ['Brie Larson', 'Samuel L Jackson', 'Ben Mendelsohn', 'Jude Law'], movieImg: 'https://starloggers.files.wordpress.com/2019/03/cap-marvel-poster.jpg'},
        { name: "Doctor Strange", releaseYear: '2016', director: ['Scott Derrickson'], cast: ['Benedict Comberbatch', 'Chiwetel Ejiofor', 'Rachel McAdams', 'Benedict Wong'], movieImg: 'https://images-na.ssl-images-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg'},
        { name: "Guardians Of The Galaxy", releaseYear: '2014', director: ['James Gunn'], cast: ['Chris Pratt', 'Dave Bautista', 'Vin Diesel', 'Bradley Cooper', 'Zoe Saldana'], movieImg:'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_.jpg'},
        { name: "Guardians Of The Galaxy Vol 2", releaseYear: '2017', director: ['James Gunn'], cast: ['Chris Pratt', 'Vin Diesel', 'Dave Bautista', 'Bradley Cooper', 'Kurt Russell', 'Zoe Saldana'], movieImg: 'https://images-na.ssl-images-amazon.com/images/I/A11Agdd1EQL._AC_SL1500_.jpg'},
        { name: "Ironman", releaseYear: '2008', director: ['Jon Favreau'], cast: ['Robert Downey Jr', 'Gwyneth Paltrow', 'Terrence Howard', 'Jeff Bridges'], movieImg: 'https://natedsanders.com/blog/wp-content/uploads/2020/06/iron-man.jpg'},
        { name: "Ironman 2", releaseYear: '2010', director: ['Jon Favreau'], cast: ['Robert Downey Jr', 'Mickey Rourke', 'Gwyneth Paltrow', 'Don Cheadle'], movieImg: 'https://images-na.ssl-images-amazon.com/images/I/81sC6pkIARL._AC_SL1500_.jpg'},
        { name: "Ironman 3", releaseYear: '2013', director: ['Shane Black'], cast: ['Robert Downey Jr', 'Guy Pearce', 'Gwyneth Paltrow', 'Don Cheadle'], movieImg: 'https://genesworlds.files.wordpress.com/2013/05/iron-man-3-ipad-desktop-23.jpg'},
        { name: "Spider-Man: Far From Home", releaseYear: '2019', director: ['Jon Watts'], cast: ['Tom Holland', 'Jake Gyllenhal', 'Zendaya', 'Robert Downey Jr', 'Marisa Tomei'], movieImg: 'https://m.media-amazon.com/images/I/910t9BoIymL._AC_SL1500_.jpg'},
        { name: "Spider-Man: Homecoming", releaseYear: '2017', director: ['Jon Watts'], cast: ['Tom Holland', 'Michael Keaton', 'Zendaya', 'Robert Downey Jr', 'Marisa Tomei'], movieImg: 'https://i.pinimg.com/originals/e6/a2/5a/e6a25a2855e741f7461fe1698db3153a.jpg'},
        { name: "The Avengers", releaseYear: '2012', director: ['Joss Whedon'], cast: ['Robert Downey Jr', 'Chris Evans', 'Scarlett Johansson', 'Jeremy Renner'], movieImg: 'https://images-na.ssl-images-amazon.com/images/I/81DeBALbJWL._AC_SL1500_.jpg'},
        { name: "The Incredible Hulk", releaseYear: '2008', director: ['Louis Leterrier'], cast: ['Edward Norton', 'Liv Tyler', 'Tim Roth', 'William Hurt'], movieImg: 'https://64.media.tumblr.com/483aa025631113d9270df54c851f764c/tumblr_pqgxvyt8hw1tk4n0bo1_1280.jpg'},
        { name: "Thor", releaseYear: '2011', director: ['Kenneth Branagh'], cast: ['Chris Hemsworth', 'Anthony Hopkins', 'Natalie Portman', 'Tom Hiddleston'], movieImg: 'https://64.media.tumblr.com/2b3d0260149481924e85a0385b9931ab/tumblr_pqh3mxmAn21tk4n0bo1_1280.jpg'},
        { name: "Thor: Ragnarok", releaseYear: '2017', director: ['Taika Watiti'], cast: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett', 'Mark Ruffalo'], movieImg: 'https://64.media.tumblr.com/a8c2c4b47a9b427a960570f2b408f93f/tumblr_pqh5f4qs5f1tk4n0bo1_1280.jpg'},
        { name: "Thor: The Dark World", releaseYear: '2013', director: ['Alan Taylor'], cast: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Stellan Skarsgard'], movieImg: 'https://64.media.tumblr.com/595f78578de5cd2aa6013ffe799e89bd/tumblr_pqh474OpHK1tk4n0bo1_1280.jpg'},], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Movies', null, {});
  }
};
