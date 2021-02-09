import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import {useQuery} from '@apollo/client';
import CustomButton from "../customButton/customButton";
import {BASE_URL} from '../../utils';
import "./productDetails.scss";
import {PRODUCT} from '../graphql/query'

const ProductDetails = ({ addItem, match }) => {
  const productId = Number(match.params.productId);

  const [t,setT]  = React.useState(true)
  const {loading,error,data}  = useQuery(PRODUCT,{variables:{productId}})

  const [product, setProduct] = useState({});


  useEffect(() => {
    if(data){
      setProduct(data.product)
    }
  }, [productId]);

console.log(data)


  return (
    <>  
    <div>
      {loading && <p>Loading ...</p>}
    </div>

    {
    
     data &&  (
       (
  <div className="details">
      <div className="product">
        <div className="image">
          <img src={BASE_URL+data.product.imageUrl} alt="" />
        </div>
      </div>

      <div className="detail">
        <div className="properties">
         <div style={{margin:20}}>
          <h4>{data.product.name}</h4>
          <h5 style={{marginLeft:'25%'}}>{data.product.category.name}</h5>
          <p>
           {
             data.product.description
           }
          </p>
          </div>
         <h4>Ugx:{data.product.price}</h4>
          <p>Ad by: { `${data.product.owner.firstName} - ${data.product.owner.lastName} ${data.product.owner.telephone}` }</p>
          <p></p>
          <div>
            <CustomButton 
            style={{marginLeft:'25%'}}
             onClick={() => addItem(product)}>
              Add To Cart
            </CustomButton>
          </div>
        </div>

      </div>
    
    </div>
      )
     )
    }

    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(ProductDetails);
