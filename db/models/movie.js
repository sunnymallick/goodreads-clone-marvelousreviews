'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    director: DataTypes.STRING,
    cast: DataTypes.STRING,
    movieImg: DataTypes.STRING,
    tagline: DataTypes.STRING,
    description: DataTypes.TEXT,
    quote: DataTypes.STRING,
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};
