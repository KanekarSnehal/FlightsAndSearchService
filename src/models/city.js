'use strict';
const {
  Model
} = require('sequelize');

/**
 * @typedef {{name: string}} City
 */

/**
 * 
 * @param {*} sequelize 
 * @param {*} DataTypes 
 * @returns 
 */

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,        // allowNull defaults to true
      unique: true
    },
  }, {
    // Other model options go here
    sequelize,                // We need to pass the connection instance
    modelName: 'City',        // We need to choose the model name
  });
  return City;
};