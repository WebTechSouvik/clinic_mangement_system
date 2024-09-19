"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
 

    static associate(models) {
      User.hasMany(models.Patient,{
        foreignKey:user_id
      })
   
    }
  }
  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
      
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
