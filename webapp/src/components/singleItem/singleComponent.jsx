import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CustomButton from "../customButton/customButton";
import {BASE_URL} from '../../utils';
import { addItem } from "../../redux/cart/cartActions";

import "./singleItemStyles.scss";

const ProductItem = ({ item, addItem, history }) => {
  return (
    <div className="item">
      <div className="image">
        <Link to={`/products/${item.id}`}>
          <img src={BASE_URL+item.imageUrl} alt="Image not found" />
        </Link>
      </div>
      <div>
        <div className="card-foot">
          <h3>{item.name}</h3>
          <h3>{item.price}/=</h3>
        </div>
        <Link to="/checkout">
          <CustomButton onClick={() => addItem(item)} inverted>
            Add to cart
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
