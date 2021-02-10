import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import {Col,Row} from 'reactstrap';
import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSeletor";

import CheckoutItem from "../checkoutItem/checkoutComponent";

import "./checkoutPageStyles.scss";

const CheckoutPage = ({ cartItems, total }) => {


  const handleItemClick = (item) => {

      const quantities = cartItems.map(cart => cart.quantity)
      const productIds = cartItems.map(cart => cart.id)

   
     
  }
  
  return (
  <>
    <Link to="/" className="back">
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
      <span>view more ads</span>
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
     <Row>
      <Col xs="6" sm="6">
      <div>
        <button onClick={() => handleItemClick(cartItems)}style={styles.button} >
          confirm order
        </button>
      </div>
      </Col>

      <Col xs="6" sm="6">
       <div style={styles.total} >
        <h4>Total:Ugx:{total}</h4>
      </div>
      </Col>
      </Row> 
     
    </div>
  </>
)

};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

const styles = {
  button: {margin:20,padding:10,width:'80%',color:'white',borderRadius:5,fontWeight:800,backgroundColor:'black'},
  total:{marginTop: 30}
}