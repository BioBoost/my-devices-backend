'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'tertwhioretreirehureihdsafdfasdfu49355345u35js',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
