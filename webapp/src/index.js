import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { store, persistor } from "./redux/store";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";


const client = new ApolloClient({
  uri: 'http://localhost:4000/talent-promotion/api/v1',
  cache: new InMemoryCache()
});



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
          <ApolloProvider client={client} >
             <App />
          </ApolloProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
