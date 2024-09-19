"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Add extends Model {
 

    static associate(models) {
   
    }
  }
  Add.init(
    {
        address_line_1: {
        type: DatatTypes.STRING,
        allowNull: false
      },
      address_line_1: {
        type: DatatTypes.STRING,
        allowNull: false,

      }
      
    {
      timestamps: true,
      sequelize,
      modelName: "Add",
    },
  );
  return Add;
};
