'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieShelf = sequelize.define('MovieShelf', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  MovieShelf.associate = function(models) {
    // associations can be defined here
  };
  return MovieShelf;
};