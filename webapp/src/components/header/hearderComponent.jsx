import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { selectCartHidden } from "../../redux/cart/cartSeletor";
import CartIcon from "../cartIcon/cartIconComponent";
import CartDropDown from "../cartDropDown/cartDropDownComponent";
import { navs } from "../../services/navElements";

import "./headerStyles.scss";

const Header = ({ hidden }) => {
  const [nav, setNav] = useState(false);

  const showSidebar = () => setNav(!nav);

  return (
    <div className="header">
      <Link className="logo-container" to="/">

       <img src={require(`../../assets/ad.png`)}/>  Talents Promotion Platform
      </Link>

      <div className="mobile">
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
          <ul className="nav-menu-items">
            {navs.map((item, index) => {
              return (
                <li key={index} className={item.cname}>
                  {
                    <NavLink to={item.path} onClick={showSidebar}>
                     {item.name}
                    </NavLink>
                  }
                </li>
              );
            })}
          </ul>
        </div>
      </div>


      <div className="options">
        <NavLink className="option" to="/about_us">
          About Us
        </NavLink>
        <NavLink className="option" to="/signup">
          SignUp
        </NavLink>

        <NavLink className="option" to="/login">
          Login
        </NavLink>

        <NavLink className="option" to="/contact_us">
          Contact Us
        </NavLink>

        <NavLink className="option" to="/me">
          Profile
        </NavLink>

        <CartIcon />
      </div>

      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapstateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapstateToProps)(Header);
