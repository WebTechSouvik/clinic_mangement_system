'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      address_line_1: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      address_line_2: {
        type: Sequelize.STRING(45),
        allowNull: true,
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
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cities', // Assuming the table name is 'cities'
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('addresses');
  }
};

// 20240917191805-create_address_table.js