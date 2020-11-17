'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeviceInterface = sequelize.define('DeviceInterface', {
    mac: DataTypes.STRING,
    DeviceId: DataTypes.INTEGER
  }, {});
  DeviceInterface.associate = function(models) {
    models.DeviceInterface.belongsTo(models.Device, {
      onDelete: "CASCADE"
    })
  };
  return DeviceInterface;
};