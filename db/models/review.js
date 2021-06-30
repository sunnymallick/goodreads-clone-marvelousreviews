'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    review: DataTypes.STRING,
    likeDislikes_id: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Movie, { foreignKey: 'movie_id' });
    Review.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Review;
};
