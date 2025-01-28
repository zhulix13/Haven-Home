import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create the provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
