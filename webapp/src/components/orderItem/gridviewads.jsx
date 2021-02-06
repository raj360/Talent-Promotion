import React from "react";

import "./orderItem.scss";
const GridViewAds = ({ item }) => {
  const { name, image, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img style={{borderRadius:5}} src={require(`../../assets/${image}`)} alt="" />
      </div>
      <span className="name">{name}</span>
     
      <span className="price">{quantity * price}</span>

           <div
         style={{margin:20}}
        >
          {/* <button style={styles.button1}></button> */}
           <button style={styles.button2}>Remove</button>
        </div>
    </div>
  );
};


const styles = {
  button1:{margin:5,padding:10,width:100,backgroundColor:'black',color:'white',borderRadius:5,fontWeight:800},
  button2:{margin:5,padding:10,width:100,color:'black',borderRadius:5,fontWeight:800,marginLeft: 200}
}

export default GridViewAds;
