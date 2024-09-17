'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dosage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      frequency: {
        type: Sequelize.STRING,
          allowNull: false,
      },
       duration: {
        type: Sequelize.STRING,
        defaultValue:false
      },
       cost: {
        type: Sequelize.FLOAT,
       allowNull:
      },
      note: {
        type: Sequelize.TEXT,
        allowNull:true  
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      appoinment_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'appoinments',
            schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
      appoinment_user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medicines');
  }
};