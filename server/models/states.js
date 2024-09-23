"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    static associate(models) {}
  }
  States.init(
    {
      state_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "States",
    },
  );
  return States;
};
