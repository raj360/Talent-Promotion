import React from "react";
import Carousel from 'react-elastic-carousel';
import { BASE_URL } from "../../utils";
import "./orderItem.scss";

const test1 = require('../../assets/image11.jpg');
const test2 = require('../../assets/image9.jpg');
const test3= require('../../assets/image13.jpg');
const test4 = require('../../assets/image14.jpg');
const test5 = require('../../assets/image15.jpg');
//cartItems
const OutGoingOrderItem = ({ item, createdAt }) => {

  const {orderItems} = item;
  
console.log(createdAt)
  const computeTotalCost = orderItems => orderItems.map(order => (order.cartItems.quantity*order.cartItems.product.price)).reduce((a,b)=> a+b)

  const computeTotalQuantity = orderItems => orderItems.map(order => (order.cartItems.quantity)).reduce((a,b)=> a+b)
  
  return (
    <div className="checkout-item">
      <div className="outgoing-order-item">

       <Carousel style={{marginTop:30,width:'100%'}}>
        {orderItems.map(item => (
          <div key={item.id}>
          <p>{item.cartItems.product.name}</p>
          <img  src={BASE_URL+item.cartItems.product.imageUrl} style={{width:100,height:100,borderRadius:5,marginTop:-10}} alt="" /> 
          <p>AdBy - {item.cartItems.product.owner.firstName}</p>
          <p>{item.cartItems.product.owner.telephone} </p>
          </div>
        ))}
       </Carousel>
      </div>
      <span className="name">{`ORDER-${item.id}`}</span>
      <span className="quantity">
        <span className="value">{`(${computeTotalQuantity(orderItems)})`}</span>
      </span>
      <span className="price">{computeTotalCost(orderItems)}</span>
        <span>{new Date(createdAt).toLocaleString()}</span>
        {/* <button style={styles.button2}>Cancle</button> */}
    </div>
  );
};
// (new Date().toLocaleString())
export default OutGoingOrderItem;


const styles = {
  button2:{margin:5,padding:10,width:100,color:'black',borderRadius:5,fontWeight:800,marginRight: 50}
}