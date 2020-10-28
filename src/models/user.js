'use strict';

const Password = require("../helpers/password.js");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {});

  User.beforeCreate(async (user, options) => {
    user.password = await Password.hash(user.password);
  });

  User.associate = function(models) {
    models.User.hasMany(models.Device, {
      onDelete: "CASCADE"
    })
  };
  
  return User;
};