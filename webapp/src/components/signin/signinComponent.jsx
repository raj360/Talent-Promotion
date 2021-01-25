import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../customButton/customButton";

import FormInput from "../textInput/formInputComponent";
const SignIn = (props) => {
  const [userCredetials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredetials;
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
        I don't have an account <Link style={{color:'#000'}} to="/signup">Register</Link>
      </p>
      <h2 className="title">Sign In Here </h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
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
        <CustomButton type="submit">SignIn</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
