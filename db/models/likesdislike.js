'use strict';
module.exports = (sequelize, DataTypes) => {
  const LikesDislike = sequelize.define('LikesDislike', {
    user_id: DataTypes.INTEGER,
    rating: DataTypes.BOOLEAN
  }, {});
  LikesDislike.associate = function(models) {
    // associations can be defined here
    LikesDislike.hasMany(models.Review, { foreignKey: 'likeDislikes_id' })
  };
  return LikesDislike;
};
