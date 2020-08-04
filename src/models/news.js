'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users, { foreignKey: 'id_author', as: 'author' })
    }
  };
  news.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'news',
  });
  return news;
};