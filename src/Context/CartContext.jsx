import React, { createContext, useState, useEffect, useContext } from "react";
import { set } from "react-hook-form";
import { useAuth } from "./AuthContext";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { loggedUser} = useAuth();
  const userKey = loggedUser ? `cart_${loggedUser.email}`:"guest"
useEffect(() => {
  try {
   const savedUserKey = JSON.parse(localStorage.getItem(userKey))
 if (Array.isArray(savedUserKey)) {
  setCart(savedUserKey);
 } else{
  setCart([])
 }
}
catch{
  setCart([])
}
}, [userKey])

  
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      if (Array.isArray(savedCart)) {
        const normalize = savedCart.map((item) => ({
          ...item,
          price: +item.price || 0,
          quantity: +item.quantity || 0,
        }));
        setCart(normalize);
      } 
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
      localStorage.removeItem("cart");
    } finally {
        setLoaded(true)
    }
  }, []);

  useEffect(() => {
    if (loaded && userKey) {
        localStorage.setItem(userKey, JSON.stringify(cart));
    }
  }, [cart, loaded, userKey]);

  const addCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => 
          item.id === product.id
            ? { ...item, quantity: Number(item.quantity || 0) + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          { ...product, price: Number(product.price || 0), quantity: 1 },
        ];
      }
    });
};
  const removeCart = (productId) => {
    setCart((prev) =>
      prev
        .map((item) => 
          item.id === productId
            ? { ...item, quantity: Math.max(Number(item.quantity || 0) - 1, 0) }
            : item
        )
        .filter((item) => +item.quantity || 0 > 0)
    );
}
  const delCart = (product) =>
    setCart((prev) => prev.filter((item) => item.id !== product.id));

const totalPrice = () => {
  return cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );
};
return (
  <CartContext.Provider
    value={{
      cart,
      setCart,
      addCart,
      removeCart,
      delCart,
      totalPrice,
    }}
  >
    {children}
  </CartContext.Provider>
);
}
export default CartProvider;
export const useCart = () => useContext(CartContext);
