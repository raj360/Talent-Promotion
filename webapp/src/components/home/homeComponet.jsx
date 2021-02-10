import React, { useState,useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useQuery} from '@apollo/client';
import { getAllCrafts } from "../../services/demoData";
import ProductItem from "../singleItem/singleComponent";
import { paginate } from "../../services/pagiantion";
import Pagiantion from "../pagination/pagination";
import {PRODUCTS} from '../graphql/query';
import {connect} from 'react-redux'
import { sideBar } from "../../services/navElements";
import "./homeStyples.scss";
import { addCategory } from "../../redux/user/userActions";
import { selectorCategories } from "../../redux/user/userSelector";
import { createStructuredSelector } from "reselect";

const HomePage = ({addCategory,categories}) => {
  const allCrafts = getAllCrafts();
  const pageSize = 12;

  const {loading,error,data} = useQuery(PRODUCTS)
  const [products,setProducts] = useState([])
  const  filterViaCategory = (arr, category) => {
  return arr.filter(obj => obj.category.name === category);
  }
  
   

  const [category,setCategory] = useState('All');

  const [nav, setNav] = useState(false);

  const showSidebar = () => setNav(!nav);

  const [currentPage, setCurrentPage] = useState(1);
  // const handleCategoryChange = (ele) =>setCategory(ele);
  const handlePageChange = (page) => setCurrentPage(page);
 

  const sorted = () => {
       if(category === 'All') {
         return paginate(products, currentPage, pageSize);
       }else{
         return paginate(filterViaCategory(products,category),currentPage,pageSize);
       }
  }

  useEffect(() => {
    if(data) {
    setProducts(data.products)
    addCategory(data.categories)
    }

  })

  return (
    <>
      <div className="home">
        <div className="icons">
          <div className="icon">
            {!nav ? (
              <FontAwesomeIcon
                icon={faBars}
                className="icons"
                onClick={showSidebar}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                className="icons"
                onClick={showSidebar}
              />
            )}
          </div>

          <div className={nav ? "nav-menu active" : "nav-menu"}>
            <div className="nav-menu-items">
              <h3>Categories</h3>
              {categories.map((item, index) => {
                return (
                  <li key={index} onClick={()=> setCategory(item.name)} className="navs">
                    {
                      <Link
                        to="#"
                        onClick={showSidebar}
                        key={index}
                        className="navs"
                      >
                        {item.name}
                      </Link>
                    }
                  </li>
                );
              })}
            </div>
          </div>
        </div>

        <div className="categories">
          <h3>Categories</h3>
          {categories.map((item, index) => {
                return (
                      <p
                        style={{backgroundColor:category===item.name?'#000000':'',
                        borderRadius:5,
                       color:category===item.name?'#FFF':''
                      }}
                        onClick={()=> setCategory(item.name)  } 
                        key={index}
                        >
                        {item.name}
                      </p>
                );
              })}
        </div>
    

        <div className="items">
          
          {
            (sorted().length === 0) ?
            (
              <h4>Server is down or There are no products added to the system .... </h4>
            ): 
            (sorted().map((item) => (
            <ProductItem key={item.id} item={item} />
          )))
          }
        </div>
      </div>
      <div className="pages">
        <Pagiantion
          itemsCount={allCrafts.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch,) => {
  return {
    addCategory: (data) => {
      dispatch(addCategory(data))
    }
  }
}

const mapstateToProps = createStructuredSelector({
  categories:selectorCategories
})
//   0704163090
export default connect(mapstateToProps, mapDispatchToProps)(HomePage)

