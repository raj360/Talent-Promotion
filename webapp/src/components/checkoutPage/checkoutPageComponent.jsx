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
import { selectorUser,selectorIsLoggedIn } from "../../redux/user/userSelector";
import { USER } from "../graphql/query";
import { useMutation } from '@apollo/client';

import { MAKE_ORDER } from "../graphql/mutation";
import { clearCart } from "../../redux/cart/cartActions";



const CheckoutPage = ({ cartItems, total,user,clearCart,isLoggedIn}) => {
  
  const userId = user.id;

  const [makeOrder] = useMutation(MAKE_ORDER,{
    onCompleted: data => {
      if(data){
        clearCart()
         window.location = '/outgoing'
      }
    }
  })

  const handleItemClick = () => {
      const quantities = cartItems.map(cart => cart.quantity)
      const productIds = cartItems.map(cart => cart.id)
      
      if(isLoggedIn){
        if(quantities.length > 0) 
      makeOrder({variables:{quantities,productIds,userId}})
      else
      window.alert(`Cart is Empty`)
      }else{
        window.location ='/login'
      }
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
        <button onClick={handleItemClick}style={styles.button} >
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
  user:selectorUser,
  isLoggedIn:selectorIsLoggedIn
});

const mapDispatchToProps = (dispatch) => {
  return {
     clearCart: () => {
      dispatch(clearCart());
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);

const styles = {
  button: {margin:20,padding:10,width:'100%',color:'white',borderRadius:5,fontWeight:800,backgroundColor:'black'},
  total:{marginTop: 30}
}