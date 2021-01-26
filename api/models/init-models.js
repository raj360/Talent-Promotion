var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _cart = require("./cart");
var _cartItem = require("./cartItem");
var _category = require("./category");
var _order = require("./order");
var _orderItem = require("./orderItem");
var _product = require("./product");
var _productCategory = require("./productCategory");
var _transaction = require("./transaction");
var _user = require("./user");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cartItem = _cartItem(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var orderItem = _orderItem(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var productCategory = _productCategory(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  address.belongsTo(user, { foreignKey: "userId"});
  user.hasMany(address, { foreignKey: "userId"});
  cart.belongsTo(user, { foreignKey: "userId"});
  user.hasMany(cart, { foreignKey: "userId"});
  cartItem.belongsTo(cart, { foreignKey: "cartId"});
  cart.hasMany(cartItem, { foreignKey: "cartId"});
  cartItem.belongsTo(product, { foreignKey: "productId"});
  product.hasMany(cartItem, { foreignKey: "productId"});
  category.belongsTo(productCategory, { foreignKey: "productCategoryId"});
  productCategory.hasMany(category, { foreignKey: "productCategoryId"});
  category.belongsTo(product, { foreignKey: "productId"});
  product.hasMany(category, { foreignKey: "productId"});
  order.belongsTo(user, { foreignKey: "userId"});
  user.hasMany(order, { foreignKey: "userId"});
  orderItem.belongsTo(order, { foreignKey: "orderId"});
  order.hasMany(orderItem, { foreignKey: "orderId"});
  orderItem.belongsTo(cartItem, { foreignKey: "cartItemId"});
  cartItem.hasMany(orderItem, { foreignKey: "cartItemId"});
  product.belongsTo(user, { foreignKey: "userId"});
  user.hasMany(product, { foreignKey: "userId"});
  transaction.belongsTo(order, { foreignKey: "orderId"});
  order.hasMany(transaction, { foreignKey: "orderId"});
  transaction.belongsTo(user, { foreignKey: "userId"});
  user.hasMany(transaction, { foreignKey: "userId"});

  return {
    address,
    cart,
    cartItem,
    category,
    order,
    orderItem,
    product,
    productCategory,
    transaction,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
