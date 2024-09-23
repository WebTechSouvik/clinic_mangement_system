"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
 

    static associate(models) {
      User.hasMany(models.Patient,{
        foreignKey: "userId"
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
      tableName: "users",
      modelName: "User",
    },
  );
   User.beforeCreate(async (user, options) => {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
    });


    // User.prototype.comparePassword = async function (candidatePassword) {
    //     try {
    //         const isMatch = await bcrypt.compare(candidatePassword, this.password);
    //         return isMatch;
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

  return User;
};
