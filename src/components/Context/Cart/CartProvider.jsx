import React, { useReducer } from "react";
import CartContext from "./CartContext";
import { ADD_TO_CART, REMVOE_FROM_CART } from "./actions";

const initialState = {
  cart: [1, 2, 3]
};

// state & action
const cartReducer = (state, { type, course }) => {
  if (type === ADD_TO_CART) {
    return {
      cart: state.cart.concat(course)
    };
  }
  if (type === REMVOE_FROM_CART) {
    return {
      cart: state.cart.filter(c => c.id !== course)
    };
  }

  return state;
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>;
};

export default CartProvider;
