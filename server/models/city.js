"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.State, {
        foreignKey: "state_id",
      });

      City.hasOne(models.Address,{
        foreignKey:"city_id"
      })
    }
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
