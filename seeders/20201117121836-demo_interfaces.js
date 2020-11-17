'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DeviceInterfaces', [{
      mac: 'AA:BB:CC:DD:EE:FF',
      DeviceId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      mac: '11:BB:CC:DD:EE:FF',
      DeviceId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DeviceInterfaces', null, {});
  }
};
