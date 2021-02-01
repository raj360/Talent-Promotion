import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/hearderComponent";
import HomePage from "./components/home/homeComponet";
import SignIn from "./components/signin/signinComponent";
import SignUp from "./components/signup/signupComponent";
import CheckoutPage from "./components/checkoutPage/checkoutPageComponent";
import ProductDetails from "./components/ProductDetails/productDetails";
import AboutUs from "./components/aboutUs/aboutUs";
import Footer from "./components/footer/footerComponent";
import CustomerDetails from "./components/customerDetails/customerDetails";
import ContactUs from "./components/contactus/contactus";
import CustomerOrders from "./components/ordders/orders";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={SignIn} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/contact_us" component={ContactUs} />
        <Route path="/me" component={CustomerDetails} />
        <Route path="/products/:name" component={ProductDetails} />
        <Route path="/outgoing" component={CustomerOrders} />
        <Route path="/incoming" component={CustomerOrders} />
        <Route path="/transaction" component={CustomerOrders} />
        <Route path="/ads" component={CustomerOrders} />
        <Route path="/new-add" component={CustomerDetails} />
        
        

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
