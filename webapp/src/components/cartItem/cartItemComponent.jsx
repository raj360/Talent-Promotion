import React from "react";

import "./cartItemStyles.scss";

const CartItem = ({ item: { image, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={require(`../../assets/${image}`)} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ugx:{price}
      </span>
    </div>
  </div>
);

export default CartItem;
