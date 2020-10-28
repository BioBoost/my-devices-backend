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
      attributes: { exclude: ['UserId', 'hostname', 'location'] },
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

  create: (obj) => {
    return db.Device.create(obj);
  }
}

module.exports = Devices;
