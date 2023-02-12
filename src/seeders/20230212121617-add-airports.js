'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Indira Gandhi International Airport',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pune International Airport',
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jay Prakash Narayan International Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lal Bahadur Shastri International Airport',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Devi Ahilya Bai Holkar Airport',
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
