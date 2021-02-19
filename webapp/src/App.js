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
import IncomingOrders from "./components/ordders/incoming";
import OutGoingOrders from "./components/ordders/outgoing";
import MyAds from "./components/ordders/myads";
import Transaction from "./components/ordders/transaction";
import CreateAds from "./components/customerDetails/createAds";

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
        <Route path="/products/:productId" component={ProductDetails} />
        <Route path="/outgoing" component={OutGoingOrders} />
        <Route path="/incoming" component={IncomingOrders} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/ads" component={MyAds} />
        <Route path="/new-add" component={CreateAds} />
        
        

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
