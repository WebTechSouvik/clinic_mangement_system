"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {

      Patient.belongsTo(models.User,{
        foreignKey:user_id
      })
    }
  }
  Patient.init(
    {
      first_name: {
        type: DatatTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DatatTypes.STRING,
        allowNull: false,
      },
      phone_no: {
        type: DatatTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true,
          len: 10,
        },
      },
      gender: {
        type: DatatTypes.ENUM,
        values: ["Male", "Female", "Other"],
        allowNull: false,
      },
      age: {
        type: DatatTypes.INTEGER,
        allowNull: false,
      },
      dob: {
        type: DatatTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Patient",
    },
  );
  return Patient;
};
