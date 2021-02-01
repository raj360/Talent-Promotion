import React, { useState } from "react";

import CustomerSideBar from "../customerSideMenu/customerSide";
import FormInput from "../textInput/formInputComponent";
import CustomButton from "../customButton/customButton";

import "./customerDetails.scss";

const CustomerDetails = (props) => {


  const [userCredetials, setUserCredentials] = useState({
    firstName: "Free",
    lastName: "Meghani",
    email: "data.mail@gmail.com",
    telephone: "+24344568943",
    city: "Kampala",
    district:'Nansana',
    country: "Uganda",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { state } = props.location;
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
    city,
    district,
    country,
  } = userCredetials;
  // const { username, email, contact, firstname, lastName } = customer;

  return (
    <div className="detail">
      <div className="menu">
        <CustomerSideBar />
      </div>

      <div className="tabledata">
        <form id="form-detail" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={email}
            label="email"
            onChange={handleChange}
            required
          />

          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            label="first name"
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="lastName"
            value={lastName}
            label="last name"
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="telephone"
            value={telephone}
            label="Telephone No"
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="city"
            value={city}
            label="city"
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="district"
            value={district}
            label="district"
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="country"
            value={country}
            label="country"
            onChange={handleChange}
          />
        </form>
        <CustomButton>Update</CustomButton>
        {/* <button form="form-detail">submit</button> */}
      </div>
    </div>
  );
};

export default CustomerDetails;
