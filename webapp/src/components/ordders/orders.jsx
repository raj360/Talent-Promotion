import React from "react";

import CustomerSideBar from "../customerSideMenu/customerSide";
import OrderItem from "../orderItem/orderItem";

import { getAllOrders } from "../../services/demoData";
import CustomButton from "../customButton/customButton";
import "./orders.scss";

const CustomerOrders = ({ match }) => {
  const orders = getAllOrders();

  return (
    <div className="order-details">
      <div className="menu">
        <CustomerSideBar />
      </div>
      <div className="tabledata">
        <div className="data">
          {orders.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </div>
        <div
         style={{margin:20}}
        >
          <button style={styles.button1}>Order</button>
           <button style={styles.button2}>Cancle</button>
        </div>

      </div>
      <div>
      </div>
    </div>
  );
};

const styles = {
  button1:{margin:20,padding:10,width:100,backgroundColor:'black',color:'white',borderRadius:5,fontWeight:800},
  button2:{margin:20,padding:10,width:100,color:'black',borderRadius:5,fontWeight:800}
}

export default CustomerOrders;
