import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small">
    <div className="container text-center text-md-left">
      <div className="row">
        <div
          className="col-md-4
          mx-auto"
        >
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-dark">
            PAGES
          </h5>

          <ul className="list-unstyled">
            <li>
              <Link className="page" to="/">
                Home Page
              </Link>
            </li>
            <li>
              <Link className="page" to="/signup">
                Create Ads
              </Link>
            </li>
            <li>
              <Link className="page" to="/login">
                Log In
              </Link>
            </li>
          </ul>
        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-4 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-dark">
            SERVICES
          </h5>

          <ul className="list-unstyled">
            <li>
              <p className="page">Access to loans</p>
            </li>
            <li>
              <p className="page">Access to market</p>
            </li>
            <li>
              <p className="page">Access to professionals</p>
            </li>
            <li>
              <p className="page">Sensitization</p>
            </li>
            <li>
              <p className="page">Access to Machinery</p>
            </li>
          </ul>
        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-4 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-dark">
            Contact Us
          </h5>
          <p className="page">raymondkalumba360@gmail.com</p>
          <p className="page">+25678792442</p>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3 border-top border-white text-white">
      © 2020 copyright
    </div>
  </footer>
);

export default Footer;
