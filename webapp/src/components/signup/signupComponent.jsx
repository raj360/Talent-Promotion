import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomButton from "../customButton/customButton";
import FormInput from "../textInput/formInputComponent";

import "./signupStyles.scss";

const SignUp = (props) => {
  const [userCredetials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Phone: "",
    address: "",
    password: "",
    country: "",
  });
  const {
    firstName,
    lastName,
    email,
    Phone,
    address,
    password,
    country,
  } = userCredetials;
  const handleSubmit = (e) => {
    e.preventDefault();
    const { state } = props.location;
    window.location = state ? state.from.pathname : "/";
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
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="Phone"
          value={Phone}
          label="Contact"
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="address"
          value={address}
          label="Location"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Your Password"
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="country"
          value={country}
          label="country"
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">SignUp</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
