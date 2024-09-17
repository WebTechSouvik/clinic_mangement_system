'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:
          true,
      },
      appoinment_category: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      clinic_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      venue: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      doctor_first_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      doctor_last_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      doctor_phone_no: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      doctor_about: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      fees: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        type: Sequelize.DATE,

        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),

      },
      patient_details_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'patients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Assuming the table name is 'users'
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments');

  }
};
