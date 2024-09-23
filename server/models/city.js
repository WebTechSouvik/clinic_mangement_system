"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {}
  }
  City.init(
    {
      city_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "City",
    },
  );
  return City;
};
