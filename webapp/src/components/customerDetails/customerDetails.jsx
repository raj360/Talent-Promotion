import React, { useState } from "react";
import {createStructuredSelector} from 'reselect';
import CustomerSideBar from "../customerSideMenu/customerSide";
import FormInput from "../textInput/formInputComponent";
import CustomButton from "../customButton/customButton";
import {connect} from 'react-redux';
import {selectorUser} from '../../redux/user/userSelector';
import "./customerDetails.scss";

const CustomerDetails = ({location,user}) => {


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
    email,
    telephone,
    address
  } = user;

   const {city, district,country} = address;

  //  React.useEffect(() => {
  //    setUserCredentials(firstName,lastName,email,telephone,address,city, district,country)
  //  })

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
        {/* <button form="form-detail">submit</button> */}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user:selectorUser
})


export default  connect(mapStateToProps)(CustomerDetails);
