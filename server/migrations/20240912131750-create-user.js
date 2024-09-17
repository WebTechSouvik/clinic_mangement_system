'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      last_name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      role:{
        type:Sequelize.ENUM(["user","admin"]),
        defaultValue:'user'
      },
      is_active:{
        type:Sequelize.BOOLEAN,
        defaultValue:true
      }
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};