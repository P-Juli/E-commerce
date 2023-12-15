import React, { useState } from "react";
import { PRODUCTS } from "../productlists";

export const ShopContext = React.createContext(null);

// {1:0,2:0........,7:0} this is the ddefault value of the cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };
  console.log("the cart items are",cartItems)

  const contextValue = {cartItems,addToCart,removeFromCart}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
