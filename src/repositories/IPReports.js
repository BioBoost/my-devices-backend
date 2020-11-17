const db = require('../models');

let IPReports = {

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
