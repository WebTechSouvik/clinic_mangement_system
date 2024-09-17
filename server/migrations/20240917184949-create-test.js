'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      test_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      labotary_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
      media_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'media',
            key: 'id',
          },
          allowNull: false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      },
      appoinment_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "appointments",
          key: "id",
        },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      appoinment_user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tests');
  }
};