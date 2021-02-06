import React from "react";
import Carousel from 'react-elastic-carousel';
import "./orderItem.scss";

const test1 = require('../../assets/image11.jpg');
const test2 = require('../../assets/image9.jpg');
const test3= require('../../assets/image13.jpg');
const test4 = require('../../assets/image14.jpg');
const test5 = require('../../assets/image15.jpg');

const IncomingOrderItem = ({ item }) => {
  const [items,setItems] = React.useState( [
      {id: 1, title: 'item #1',test:test1},
      {id: 2, title: 'item #2',test:test1},
      {id: 3, title: 'item #3',test:test3},
      {id: 4, title: 'item #4',test:test4},
      {id: 5, title: 'item #5',test:test5}
    ])
  const { name, image, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="outgoing-order-item">

       <Carousel style={{marginTop:30}}>
        {items.map(item => (
          <div key={item.id}>
          <p>{item.title}</p>
          <img  src={item.test} style={{width:100,height:100,borderRadius:5,marginTop:-10}} alt="" /> 
          </div>
        ))}
       </Carousel>

      </div>
      <span className="name">{`ORDER-40394`}</span>
      <span className="quantity">
        <span className="value">{items.length}</span>
      </span>
      <span className="price">{Number(items.length) * price}</span>
      <span>{new Date().toLocaleString()}</span>

        <button style={styles.button2}>View</button>
    </div>
  );
};

export default IncomingOrderItem;


const styles = {
  button2:{margin:5,padding:10,width:100,color:'black',borderRadius:5,fontWeight:800,marginRight: 80}
}