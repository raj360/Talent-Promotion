import CartActionTypes from "./cartActionTypes";

import { addItemToCart, reduceITemQuantity } from "./cartUtils";

const initial_state = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: reduceITemQuantity(state.cartItems, action.payload),
      };
      
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case CartActionTypes.ADD_TO_CART: 
      return { ...state, cartItems: 
        action.payload};

    case CartActionTypes.INCREMENT_CART:
      return { ...state, 
        cartItems: action.payload};

      case CartActionTypes.DECREMENT_CART:
        return { ...state,
           cartItems: action.payload};

       case CartActionTypes.REMOVE_FROM_CART: 
       return { ...state,
         cartItems: action.payload};

      case CartActionTypes.CLEAR_CART:
        return { ...state,
          cartItems: action.payload};

    default:
      return state;
  }
};

export default cartReducer;
