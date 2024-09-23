"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.hasOne(models.Patient, {
        foreignKey: "address_id",
      });

      Address.belongsTo(models.City, {
        foreignKey: "city_id",
      });
    }
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

      timestamps: true,
    },
  );

  return Address;
};
