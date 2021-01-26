/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "code"
    },
    status: {
      type: DataTypes.ENUM('PAID','PENDING','SUCCESSFUL'),
      allowNull: true,
      defaultValue: "PENDING"
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'transaction',
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
        name: "code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "FKtransactio146528",
        using: "BTREE",
        fields: [
          { name: "orderId" },
        ]
      },
      {
        name: "FKtransactio819238",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
