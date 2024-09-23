"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {}
  }
  Country.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Country",
    },
  );
  return Country;
};
