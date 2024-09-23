"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    static associate(models) {
      Test.belongsTo(models.Appoinment, {
        foreignKey: "appoinment_id",
      });
      Test.belongsTo(models.User, {
        foreignKey: "appoinment_user_id",
      });

       Test.belongsTo(models.Media,{
        foreignKey:"media_id"
      })
    }
  }
  Test.init(
    {
      test_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      labotary_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      is_done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Test",
    },
  );
  return Test;
};
