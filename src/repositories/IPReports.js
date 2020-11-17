const db = require('../models');

let IPReports = {

  findOrphaned: (limit=10) => {
    return db.IPReport.findAll({
      where: {
        DeviceId: null
      },
      limit: limit,
      order: [[ 'id', 'DESC']],
    })
  },

  findById: (id) => {
    return db.IPReport.findOne({
      where: {
        id: id
      },
    })
  },

  create: (obj) => {
    return db.IPReport.create(obj);
  },
}

module.exports = IPReports;
