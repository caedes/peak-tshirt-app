import { node } from "prop-types";
import React from "react";

const CartContext = React.createContext();

export function useCart() {
  return React.useContext(CartContext);
}

const reduce = (state, action) => {
  switch (action.type) {
    case "purchase":
      return [];

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = React.useReducer(reduce, []);

  const isCartEmpty = cart.length === 0;
  const cartItemsQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const purchaseCart = () => dispatch({ type: "purchase" });

  return (
    <CartContext.Provider
      value={[{ cart, isCartEmpty, cartItemsQuantity }, { purchaseCart }]}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node,
};
