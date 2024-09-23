"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {}
  }
  Address.init(
    {
      address_line_1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_line_2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },

    {
      sequelize,
      modelName: "Address",
      tableName: "addresses",
      timestamps: true,
    },
  );

  return Address;
};
