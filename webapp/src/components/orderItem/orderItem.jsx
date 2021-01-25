import React from "react";

import "./orderItem.scss";
const OrderItem = ({ item }) => {
  const { name, image, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img style={{borderRadius:5}} src={require(`../../assets/${image}`)} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="value">{quantity}</span>
      </span>
      <span className="price">{quantity * price}</span>
    </div>
  );
};

export default OrderItem;
