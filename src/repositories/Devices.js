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
      },{
        model: db.DeviceInterface,
        attributes: {
          exclude: ['DeviceId', 'createdAt', 'updatedAt'],
        }
      }],
    })
  },

  findById: (id) => {
    return db.Device.findOne({
      attributes: { exclude: ['UserId',] },
      include: [{
        model: db.IPReport,
        limit: 1,
        order: [[ 'id', 'DESC']],
      },{
        model: db.User,
        attributes: {
          exclude: ['email', 'password', 'createdAt', 'updatedAt'],    
        }
      },{
        model: db.DeviceInterface,
        attributes: {
          exclude: ['DeviceId', 'createdAt', 'updatedAt'],
        }
      }],
      where: {
        id: id
      },
    })
  },

  findByMAC: (mac) => {
    return db.Device.findOne({
      include: [{
        model: db.DeviceInterface,
        where: {
          mac: mac
        }
      }]
    })
  },

  create: (obj) => {
    return db.Device.create(
      obj,
      { include: [db.DeviceInterface] }
    );
  }
}

module.exports = Devices;
