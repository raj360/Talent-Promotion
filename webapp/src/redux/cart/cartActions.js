import CartActionTypes from "./cartActionTypes";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});


//CartManagment with apollo
export const addToCart = (data) => ({type: CartActionTypes.ADD_TO_CART, payload: data});

export const incrementCart = (data) => ({type: CartActionTypes.INCREMENT_CART, payload: data});

export const decrementCart = (data) => ({type: CartActionTypes.DECREMENT_CART, payload: data});

export const clearCart = () => ({type: CartActionTypes.CLEAR_CART});