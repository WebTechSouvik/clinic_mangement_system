"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Appoinment extends Model {
    static associate(models) {
      Appoinment.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      Appoinment.belongsTo(models.Patient, {
        foreignKey: "patient_details_id",
      });

      Appoinment.hasMany(models.Test, {
        foreignKey: "appoinment_user_id",
      });

      Appoinment.hasMany(models.Medicine, {
        foreignKey: "appoinment_user_id",
      });

      Appoinment.belongsTo(models.Media, {
        foreignKey: "media_id",
      });
    }
  }
  Appoinment.init(
    {
      appoinment_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clinic_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      doctor_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctor_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctor_phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctor_about: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      fees: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Appoinment",
      tableName: "appointments",
    },
  );
  return Appoinment;
};
