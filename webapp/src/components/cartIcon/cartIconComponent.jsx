import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/cartBag.svg";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemCount } from "../../redux/cart/cartSeletor";

import "./cartInconStyles.scss";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispachToPro = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const matStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});

export default connect(matStateToProps, mapDispachToPro)(CartIcon);

