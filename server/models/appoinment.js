"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Appoinment extends Model {
    static associate(models) {}
  }
  Appoinment.init(
    {
      appoinment_category: {
        type: DataType.STRING,
        allowNull: false,
      },
      clinic_name: {
        type: DataType.STRING,
        allowNull: false,
      },
      venue: {
        type: DataType.STRING,
        allowNull: false,
      },
      date: {
        type: DataType.DATE,
        allowNull: false,
      },
      time: {
        type: DataType.TIME,
        allowNull: false,
      },
      doctor_first_name: {
        type: DataType.STRING,
        allowNull: false,
      },
      doctor_last_name: {
        type: DataType.STRING,
        allowNull: false,
      },
      doctor_phone_no: {
        type: DataType.STRING,
        allowNull: false,
      },
      doctor_about: {
        type: DataType.TEXT,
        allowNull: true,
      },
      fees: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Appoinment",
    },
  );
  return Appoinment;
};
