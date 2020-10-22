const db = require('../models');

let Devices = {

  findAll: () => {
    return db.Device.findAll()
  },

  findById: (id) => {
    return db.Device.findOne({
      where: {
        id: id
      }
    })
  },

  create: (obj) => {
    return db.Device.create(obj);
  }
}

module.exports = Devices;
