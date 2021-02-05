import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cartActions";

import { getSingle } from "../../services/demoData";
import CustomButton from "../customButton/customButton";

import "./productDetails.scss";

const ProductDetails = ({ addItem, match }) => {
  const p_name = match.params.name;

  const [product, setProduct] = useState({});
  const pro_b = getSingle(p_name);

  useEffect(() => {
    const getProduct = async () => {
      const pro = await getSingle(p_name);
      setProduct(pro);
    };
    getProduct();
  }, [p_name]);

  const { image, price, name } = pro_b;

  return (
    <div className="details">
      <div className="product">
        <div className="properties">
          <h1>{name}</h1>
          <h4>Ugx:{price}</h4>
        </div>
        <div className="image">
          <img src={require(`../../assets/${image}`)} alt="" />
        </div>
      </div>
      <div className="detail">
        <div className="properties">
          <h4>{name}</h4>
          <h4>Ugx:{price}</h4>

          <div className="button">
            <CustomButton onClick={() => addItem(product)}>
              Add To Cart
            </CustomButton>
          </div>
        </div>

        <div className="button">
          <CustomButton onClick={() => addItem(product)}>
            Add To Cart
          </CustomButton>
        </div>

        <div className="desc">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            est libero molestias corporis quisquam sed ea quam provident cumque
            dolor.
          </p>
        </div>
      </div>
      <div className="button">
        <CustomButton onClick={() => addItem(product)}>
          Add To Cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(ProductDetails);
