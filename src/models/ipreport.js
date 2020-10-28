'use strict';
module.exports = (sequelize, DataTypes) => {
  const IPReport = sequelize.define('IPReport', {
    ip: DataTypes.STRING,
    mac: DataTypes.STRING,
    DeviceId: DataTypes.INTEGER
  }, {});
  IPReport.associate = function(models) {
    models.IPReport.belongsTo(models.Device, {
      onDelete: "CASCADE"
    })
  };
  return IPReport;
};