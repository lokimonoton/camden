'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tax_maricopas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parcel: {
        type: Sequelize.STRING
      },
      assessed_tax: {
        type: Sequelize.STRING
      },
      total_due: {
        type: Sequelize.STRING
      },
      amount_due: {
        type: Sequelize.STRING
      },
      tax_year: {
        type: Sequelize.STRING
      },
      activity_description: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      activity_date: {
        type: Sequelize.STRING
      },
      payment_date: {
        type: Sequelize.STRING
      },
      transaction: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tax_maricopas');
  }
};