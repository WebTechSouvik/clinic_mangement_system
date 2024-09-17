'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('states',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        state_name: {
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
        country_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'countries',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('states');
  }
};
