import React from "react";

import CheckoutItem from "../checkoutItem/checkoutComponent";

import "./checkoutPageStyles.scss";

const OrdersDisplay = ({ cartItems }) => (
  <>
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>image</span>
        </div>
        <div className="header-block">
          <span>name</span>
        </div>
        <div className="header-block">
          <span>Qnty</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>del</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
  </>
);

export default OrdersDisplay;
