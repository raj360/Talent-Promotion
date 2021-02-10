import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart","user"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user:userReducer
});

export default persistReducer(persistConfig, rootReducer);
