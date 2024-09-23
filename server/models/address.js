"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
 

    static associate(models) {
   
    }
  }
  Address.init(
    {
        address_line_1: {
        type: DatatTypes.STRING,
        allowNull: false
      },
      address_line_1: {
        type: DatatTypes.STRING,
        allowNull: false,

      }
    },
      
    {
      timestamps: true,
      sequelize,
      modelName: "Address",
    },
  );
  return Address;
};
