import { node } from "prop-types";
import React from "react";

const CartContext = React.createContext();

export function useCart() {
  return React.useContext(CartContext);
}

const cartReduce = (cart, action) => {
  switch (action.type) {
    case "remove":
      const { id } = action.payload;

      return cart.filter(({ id: tshirtId }) => tshirtId !== id);

    case "purchase":
      return [];

    default:
      return [...cart];
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = React.useReducer(cartReduce, []);

  const isCartEmpty = cart.length === 0;
  const cartItemsQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const purchaseCart = () => dispatch({ type: "purchase" });
  const removeFromCart = (id) => () =>
    dispatch({ type: "remove", payload: { id } });

  return (
    <CartContext.Provider
      value={[
        { cart, isCartEmpty, cartItemsQuantity },
        { purchaseCart, removeFromCart },
      ]}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node,
};
