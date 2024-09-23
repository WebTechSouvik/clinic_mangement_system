"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      Patient.belongsTo(models.User, {
        foreignKey: "user_id",
      });


      Patient.belongsTo(models.Address,{
        foreignKey:"address_id"
      })

       Patient.hasMany(models.Appoinment,{
        foreignKey:"patient_details_id"

      })
    }


  }
  Patient.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true,
          len: 10,
        },
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["Male", "Female", "Other"],
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
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
