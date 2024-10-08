"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    static associate(models) {
      Medicine.belongsTo(models.Appoinment, {
        foreignKey: "appoinment_id",
      });
      Medicine.belongsTo(models.User, {
        foreignKey: "appoinment_user_id",
      });
     
    }
  }
  Medicine.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dosage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      frequency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Medicine",
    },
  );
  return Medicine;
};
