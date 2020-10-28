const db = require('../models');

let Devices = {

  findAll: () => {
    return db.Device.findAll({
      attributes: { exclude: ['description', 'hostname', 'location', 'createdAt', 'updatedAt'] }
    })
  },

  findById: (id) => {
    return db.Device.findOne({
      include: [{
        model: db.IPReport,
      }],
      where: {
        id: id
      },
      order: [[ db.IPReport, 'id', 'DESC']],
    })
  },

  create: (obj) => {
    return db.Device.create(obj);
  }
}

module.exports = Devices;
