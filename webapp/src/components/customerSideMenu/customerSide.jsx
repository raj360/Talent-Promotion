import React from "react";
import { Link } from "react-router-dom";

import "./customerSide.scss";

const CustomerSideBar = () => {
 


  return (
    <div className="sidebar">
      <div className="image">
        <img src={require(`../../assets/pic.jpg`)} alt="no profile pic" />
      </div>

      <div className="sideMenu line">
        <p >
          <Link to="/me">Personal info</Link>
        </p>
         <p>
          <Link to={`/orders/outgoing`}>Outgoing orders</Link>
        </p>
        <p>
          <Link to={`/orders/incoming`}>Incoming orders</Link>
        </p>
         <p>
          <Link to={`/orders/transcation`}>Transactions</Link>
        </p>
         <p>
          <Link to={`/me/ads`}>My Ads</Link>
        </p>
      </div>
    </div>
  );
};

export default CustomerSideBar;
