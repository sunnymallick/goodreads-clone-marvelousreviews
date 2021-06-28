'use strict';
module.exports = (sequelize, DataTypes) => {
  const JoinTable = sequelize.define('JoinTable', {
    movieShelf_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {});
  JoinTable.associate = function(models) {
    // associations can be defined here
  };
  return JoinTable;
};
