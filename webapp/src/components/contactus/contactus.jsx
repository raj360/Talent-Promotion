import React, { useState } from "react";
import CustomButton from "../customButton/customButton";

import FormInput from "../textInput/formInputComponent";
import Textarea from "../textInput/textarea";

import "./contactus.scss";

const ContactUs = (props) => {
  const [messageData, setMessageData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const { fullname, email, message } = messageData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { state } = props.location;
    window.location = state ? state.from.pathname : "/";
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessageData({ ...messageData, [name]: value });
  };
  return (
    <>
      <h4>You have something in your mind tell us here</h4>
      <h4>Any question?</h4>
      <div className="contact_us">
        <div className="envelop">
          <img src={require(`../../assets/download.png`)} alt="envelop" />
        </div>
        <div className="forms">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="fullname"
              value={fullname}
              label="full name"
              onChange={handleChange}
              required
            />

            <FormInput
              type="email"
              name="email"
              value={email}
              label="email"
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              label="your message please"
              value={message}
              onChange={handleChange}
              required
            />
            <CustomButton type="submit" inverted>
              Send message
            </CustomButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
