import { useEffect } from "react";
import { useState } from "react"
import { getLocalStorage } from "../FakeDB/FakeDB";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getLocalStorage();
    const saveCart = [];
    for (const id in storedCart) {
      const rest = products.find(product => product.id === id);
      if (rest) {
        const quantity = storedCart[id];
        rest.quantity = quantity;
        saveCart.push(rest)
      }
    }
    setCart(saveCart)
  }, [products])

  return [cart, setCart]
}

export default useCart;