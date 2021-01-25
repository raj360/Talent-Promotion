import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSeletor";

import CheckoutItem from "../checkoutItem/checkoutComponent";

import "./checkoutPageStyles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <>
    <Link to="/" className="back">
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
      <span>continue shopping</span>
    </Link>
    <div
      style={{padding:20,borderRadius:5}} 
    className="checkout-page">
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
      <div className="total">
        <span>Total:Ugx:{total}</span>
      </div>
    </div>
  </>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
