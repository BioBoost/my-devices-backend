'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Device.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    hostname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};