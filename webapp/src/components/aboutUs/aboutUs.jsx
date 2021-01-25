import React from "react";

import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="us">
      <div className="abouts">
        <div className="mission">
          <h5>Mission</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur excepturi repudiandae inventore amet odit, ratione
          </p>
        </div>
        <div className="about">
          <h5>Our Story</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            veritatis vel quisquam maiores? Quam nobis repellendus dicta
            distinctio rerum id! Eos, tempora. Beatae recusandae consequuntur
            fuga facere aut, sint ipsum?
          </p>
        </div>
      </div>
      <h1>Our Team</h1>
      <div className="admins">
        <div className="admin">
          <div className="image">
            <img src={require(`../../assets/pic.jpg`)} alt="" />
            <h4>Free Meghani</h4>
          </div>
          <h6 className="title">Chief financial officer</h6>
        </div>
        <div className="admin">
          <div className="image">
            <img src={require(`../../assets/pic.jpg`)} alt="" />
          </div>
          <h4>Raymond Kalumba</h4>
          <h6 className="title">Sales Manager</h6>
        </div>
        <div className="admin">
          <div className="image">
            <img src={require(`../../assets/pic.jpg`)} alt="" />
          </div>
          <h4>Emmanuel Busoolo</h4>
          <h6 className="title">Production Manager</h6>
        </div>
        <div className="admin">
          <div className="image">
            <img src={require(`../../assets/pic.jpg`)} alt="" />
          </div>
          <h4>Muhamad Rashid</h4>
          <h6 className="title">Cheif executive officer</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
