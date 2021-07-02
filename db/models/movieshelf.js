'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieShelf = sequelize.define('MovieShelf', {
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    movieImg: DataTypes.STRING
  }, {});
  MovieShelf.associate = function(models) {
    MovieShelf.belongsTo(models.User, {foreignKey: 'user_id'})
    MovieShelf.belongsTo(models.Movie, {foreignKey: 'movie_id' })
  };
  return MovieShelf;
};
