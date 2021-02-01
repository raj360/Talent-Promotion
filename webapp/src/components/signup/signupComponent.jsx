import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomButton from "../customButton/customButton";
import FormInput from "../textInput/formInputComponent";

import "./signupStyles.scss";

const SignUp = (props) => {
  const [userCredetials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    username:"",
    password: "",
    country: "",
    city: "",
    district: "",
  });
  const {
    username,
    firstName,
    lastName,
    city,
    district,
    telephone,
    password,
    country,
  } = userCredetials;
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { state } = props.location;
    // console.log(props.location)
    window.location =  "/";
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredetials, [name]: value });
  };
  return (
    <div className="content">
      <p style={{color:'grey'}}>
        I already have an account <Link style={{color:'#000'}} to="/login">login</Link>
      </p>
      <h2 className="title">Sign Up Here </h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
         <FormInput
          type="text"
          name="username"
          value={username}
          label="Username"
          onChange={handleChange}
          required
        />

        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          label="First Name"
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="lastName"
          value={lastName}
          label="LastName"
          onChange={handleChange}
          required
        />
       
        <FormInput
          type="text"
          name="telephone"
          value={telephone}
          label="Telephone No."
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="city"
          value={city}
          label="City"
          onChange={handleChange}
          required
        /> 

        <FormInput
          type="text"
          name="district"
          value={district}
          label="District"
          onChange={handleChange}
          required
        />

        <FormInput
          type="text"
          name="country"
          value={country}
          label="Country"
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />
       
        <CustomButton type="submit">SignUp</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
