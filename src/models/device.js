'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate(models) {
      models.Device.hasMany(models.IPReport, {
        onDelete: "CASCADE"
      })
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