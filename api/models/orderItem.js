/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderItem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    cartItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cartItem',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'orderItem',
    timestamps: true,
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
        name: "FKorderItem999393",
        using: "BTREE",
        fields: [
          { name: "orderId" },
        ]
      },
      {
        name: "FKorderItem199050",
        using: "BTREE",
        fields: [
          { name: "cartItemId" },
        ]
      },
    ]
  });
};
