'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Indira Gandhi International Airport',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'D. B. Patil International Airport',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pune International Airport',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jay Prakash Narayan International Airport',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Devi Ahilya Bai Holkar Airport',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda International Airport Bengaluru',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hindustan Aeronautics Limited Airport',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hindustan Aeronautics Limited Airport',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysuru Airport',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hubballi Airport',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
  }
};
