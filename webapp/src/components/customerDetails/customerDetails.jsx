import React, { useState } from "react";
import {useMutation,useQuery} from '@apollo/client';
import {USER} from '../graphql/query';
import {createStructuredSelector} from 'reselect';
import CustomerSideBar from "../customerSideMenu/customerSide";
import FormInput from "../textInput/formInputComponent";
import CustomButton from "../customButton/customButton";
import {connect} from 'react-redux';
import {selectorUser,selectorUserDetails} from '../../redux/user/userSelector';
import "./customerDetails.scss";
import { allData } from '../../redux/user/userActions';

const CustomerDetails = ({location,user,allData,userDetails}) => {

   const userId = user.id;

   const {loading,error,data} = useQuery(USER,{variables:{userId}})

    React.useEffect(() => {
      if(data){
        allData(data.user)
      }
    })
 
   const [userCredetials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    city: "",
    district:'',
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { state } = location;
    window.location = state ? state.from.pathname : "/";
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredetials, [name]: value });
  };

  const {
    firstName,
    lastName,
    telephone,
    address
  } = user;

   const {city, district,country} = address;


  return (
    <div className="detail">
      <div className="menu">
        <CustomerSideBar />
      </div>

      <div className="tabledata">
        <form id="form-detail" onSubmit={handleSubmit}>
          
          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="telephone"
            value={telephone}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="city"
            value={city}
            label="city"
             readOnly
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="district"
            value={district}
            readOnly
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="country"
            value={country}
            readOnly
            onChange={handleChange}
          />
        </form>
        <CustomButton>Update</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user:selectorUser,
  userDetails:selectorUserDetails
})

const mapDispatchToProps = (dispatch) => {
  return {
    allData: data => dispatch(allData(data))
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(CustomerDetails);
