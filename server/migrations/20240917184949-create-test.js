'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tests', {
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
        defaultValue:false
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
      media_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'medias',
            schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
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
    await queryInterface.dropTable('Tests');
  }
};