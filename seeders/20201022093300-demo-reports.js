'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('IPReports', [{
      ip: '123.2.2.1',
      mac: 'AA:BB:CC:DD:EE:FF',
      deviceId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ip: '123.2.2.1',
      mac: 'AA:BB:CC:DD:EE:FF',
      deviceId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ip: '168.23.32.1',
      mac: '11:BB:CC:DD:EE:FF',
      deviceId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IPReports', null, {});
  }
};
