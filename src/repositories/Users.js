const db = require('../models');

let Users = {

  findById: (id, {excludeAttributes = []} = {}) => {
    return db.User.findOne({
      attributes: { exclude: excludeAttributes },
      where: {
        id: id
      }
    })
  },

  findByEmail: (email) => {
    return db.User.findOne({
      where: {
        email: email
      }
    })
  },

  create: (obj) => {
    return db.User.create(obj);
  },

}

module.exports = Users;
