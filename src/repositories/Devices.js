const db = require('../models');

let Devices = {

  findAll: () => {
    return db.Device.findAll({
      attributes: { exclude: ['description', 'UserId', 'hostname', 'location', 'createdAt', 'updatedAt'] },
      include: [{
        model: db.User,
        attributes: {
          exclude: ['email', 'password', 'createdAt', 'updatedAt'],    
        }
      }],
    })
  },

  findById: (id) => {
    return db.Device.findOne({
      attributes: { exclude: ['UserId',] },
      include: [{
        model: db.IPReport,
      },{
        model: db.User,
        attributes: {
          exclude: ['email', 'password', 'createdAt', 'updatedAt'],    
        }
      }],
      where: {
        id: id
      },
      order: [[ db.IPReport, 'id', 'DESC']],
    })
  },

  findByMAC: (mac) => {
    return db.Device.findOne({
      include: [{
        model: db.IPReport,
        where: {
          mac: mac
        }
      }]
    })
  },

  create: (obj) => {
    return db.Device.create(obj);
  }
}

module.exports = Devices;
