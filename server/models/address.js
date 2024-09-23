"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Add extends Model {
    static associate(models) {
      // Define associations here if needed in the future
    }
  }

  Add.init(
    {
      address_line_1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_line_2: {
        type: DataTypes.STRING,
        allowNull: true, // You can set it to `false` if it's mandatory
      },
    },
    {
      sequelize,
      modelName: "Add", // Model name
      tableName: "addresses", // Table name in the database
      timestamps: true, // To enable createdAt and updatedAt fields
    }
  );

  return Add;
};
