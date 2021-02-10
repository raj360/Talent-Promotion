import React from "react";

import CustomerSideBar from "../customerSideMenu/customerSide";
import OrderItem from "../orderItem/orderItem";
import OutGoingOrderItem from "../orderItem/outgoingorderitem";

import { getAllOrders } from "../../services/demoData";
import {useQuery} from '@apollo/client';
import "./orders.scss";
import { createStructuredSelector } from 'reselect';
import { selectorUserDetails,selectUser } from '../../redux/user/userSelector';
import { connect } from 'react-redux';
import { USER } from "../graphql/query";
import { allData } from "../../redux/user/userActions";



const OutGoing = ({ match,user,userDetails,allData }) => {
 
  const {order} = userDetails
  const userId = userDetails.id;

 
  
  const {loading,error,data} = useQuery(USER,{variables:{userId}});

  React.useEffect(() => {
    if(data){
      allData(data.user)
    }
  })

  

  return (
    <div className="order-details">
      <div className="menu">
        <CustomerSideBar />
      </div>
      <div className="tabledata">
        <div className="data">
          {order.map((item) => (
            <OutGoingOrderItem key={item.id} item={item} createdAt={item.createdAt} />
          ))}
        </div>
        <div
         style={{margin:20}}
        >
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

const mapStateToProps = createStructuredSelector({
  userDetails:selectorUserDetails
})

 const mapDispatchToProps = (dispatch) => {
   return {
     allData: data => dispatch(allData(data))
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(OutGoing)
