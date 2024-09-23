"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      State.belongsTo(models.Country, {
        foreignKey: "country_id",
      });

      State.hasMany(models.City,{
        foreignKey:"state_id"
      })
    }
  }
  State.init(
    {
      state_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "State",
    },
  );
  return State;
};
