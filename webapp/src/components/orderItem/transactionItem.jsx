import React from "react";

import "./orderItem.scss";

const date = new Date()

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

const TransactionItem = ({ item }) => {
  const { name, image, quantity, price } = item;
  return (
    <div className="checkout-item">
      <span className="name">{date.toLocaleString()}</span>
      <span className="quantity">
        <span className="value" style={{marginLeft:50}}>{`${quantity}`}</span>
      </span>
      <span className="price">{quantity * price * getRandomInt(1,9)}</span>
    </div>
  );
};

export default TransactionItem;
