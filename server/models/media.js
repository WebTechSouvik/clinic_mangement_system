"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    static associate(models) {
      Media.hasOne(models.Appoinment, {
        foreignKey: "media_id",
      });
      Media.hasOne(models.Test, {
        foreignKey: "media_id",
      });
    }
  }
  Media.init(
    {
      file_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["appoinment_pdf", "test_report_pdf"],
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Media",
    },
  );
  return Media;
};
