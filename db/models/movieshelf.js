'use strict';

const { BelongsTo } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const MovieShelf = sequelize.define('MovieShelf', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,

  }, {});
  MovieShelf.associate = function(models) {
    MovieShelf.belongsTo(models.User, {foreignKey: 'user_id'})
  };
  return MovieShelf;
};