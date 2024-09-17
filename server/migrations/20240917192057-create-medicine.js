'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicines', {
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
        defaultValue: false
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      note: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
            tableName: 'appointments',
            key: 'id'
          },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      appoinment_user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            key: 'id'
          },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medicines');
  }
};