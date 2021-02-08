import React from "react";

import "./cartItemStyles.scss";

import {BASE_URL} from '../../utils';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={BASE_URL+imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ugx:{price}
      </span>
    </div>
  </div>
);

export default CartItem;
