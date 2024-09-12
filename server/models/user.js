"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    async checkPassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["user", "admin"],
        defaultValue: "user",
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps:false
    },
  );

  User.beforeCreate(async (user, option) => {
    user.password = await bcrypt.hash(user.password, 10);
  });
  return User;
};
