/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productCategory',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FKcategory538392",
        using: "BTREE",
        fields: [
          { name: "productCategoryId" },
        ]
      },
      {
        name: "FKcategory791596",
        using: "BTREE",
        fields: [
          { name: "productId" },
        ]
      },
    ]
  });
};
