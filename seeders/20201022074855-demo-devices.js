'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Devices', [{
      name: 'WiFi Counter',
      type: 'Raspberry Pi',
      description: 'Counts the number of different MAC addresses in the network',
      location: '2.85',
      userId: null,
      image: null,
      hostname: 'wificounter',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Telraam',
      type: 'Raspberry Pi',
      description: 'Counts the number of people passing by',
      location: '2.85',
      userId: null,
      image: null,
      hostname: 'telraam',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Devices', null, {});
  }
};
