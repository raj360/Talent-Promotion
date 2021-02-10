import React from "react";

import CustomerSideBar from "../customerSideMenu/customerSide";
import OrderItem from "../orderItem/orderItem";
import GridViewAds from "../orderItem/gridviewads"
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { getAllOrders } from "../../services/demoData";
import CustomButton from "../customButton/customButton";
import "./orders.scss";
import { selectorUserDetails } from '../../redux/user/userSelector';
import {Col,Row} from 'reactstrap';
import { allData } from "../../redux/user/userActions";
import { REMOVE_PRODUCT } from "../graphql/mutation";
import {useMutation} from '@apollo/client';


const MyAds = ({ match,userDetails,allData }) => {

  const userId = userDetails.id;

  const handleItemClick =  (item) => {
   const productId = item.id;
   removeProduct({variables:{productId,userId}})
  }

  const [removeProduct,{loading,error}] = useMutation(REMOVE_PRODUCT,{
    onCompleted: data => {
      if(data){
        allData(data.removeProduct)
      }
    }
  })

  const orders = userDetails.products;
  return (
    <div className="order-details">
      <div className="menu">
        <CustomerSideBar />
      </div>
      <div className="tabledata">
        <div className="data">

          <Row>
            {orders.map((item) => (
            <GridViewAds key={item.id} item={item} handleItemClick={handleItemClick} />
          ))}
          </Row>
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    allData: (data) => {
       dispatch(allData(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyAds)

