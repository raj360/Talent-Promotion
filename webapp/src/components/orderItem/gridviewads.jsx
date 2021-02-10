import React from "react";
import { BASE_URL } from "../../utils";

import "./orderItem.scss";
const GridViewAds = ({ item,handleItemClick}) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="checkout-item-grid" style={styles.card}>
      <div className="image-container-grid">
        <img style={{borderRadius:5}} src={`${BASE_URL}${imageUrl}`} alt="" />
      </div>
      <h4>{name}</h4>
     
      <h4>{price}</h4>

           <div>
           <button onClick={() => handleItemClick(item)} style={styles.button1}>Remove</button>
        </div>
    </div>
  );
};


const styles = {
  button1:{margin:5,padding:10,width:100,backgroundColor:'black',color:'white',borderRadius:5,fontWeight:800,marginLeft:'25%'},
  button2:{margin:5,padding:10,width:100,color:'black',borderRadius:5,fontWeight:800,marginLeft:'30%'},
  card:{borderRadius:5,padding:5,width:200,margin: 5}
}

export default GridViewAds;
