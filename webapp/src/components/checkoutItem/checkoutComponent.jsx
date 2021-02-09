import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";

import {BASE_URL} from '../../utils';
import "./checkoutStyles.scss";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item" style={{width:'95%'}}>
      <div className="image-container">
        <img style={{ width:'100%',height:'80%',margin:5,borderRadius:5}} src={BASE_URL+imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>

     <div style={{backgroundColor:'#000',borderRadius:200,alignItems: 'center',justifyContent:'center',marginRight:30}}> 
       <div style={{color:'#FFF',margin:5,marginRight:15}} className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div></div>

    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
