'use strict';
module.exports = (sequelize, DataTypes) => {
  const tax_maricopa = sequelize.define('tax_maricopa', {
    parcel: DataTypes.STRING,
    assessed_tax: DataTypes.STRING,
    total_due: DataTypes.STRING,
    amount_due: DataTypes.STRING,
    tax_year: DataTypes.STRING,
    activity_description: DataTypes.STRING,
    amount: DataTypes.STRING,
    activity_date: DataTypes.STRING,
    payment_date: DataTypes.STRING,
    transaction: DataTypes.STRING
  }, {
    underscored: true,
  });
  tax_maricopa.associate = function(models) {
    // associations can be defined here
  };
  return tax_maricopa;
};