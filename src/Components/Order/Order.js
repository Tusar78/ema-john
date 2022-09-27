import React from "react";
import Cart from "../Cart/Cart";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { FaRegCreditCard, FaTrash } from "react-icons/fa";
import { clearLocalStorage, deleteItem } from "../../FakeDB/FakeDB";

const Order = () => {
  const [Products, setProducts] = useProducts();
  const [cart, setCart] = useCart(Products);
  const clearCart = () => {
    setCart([]);
    clearLocalStorage();
  };

  const removeItem = (selectedProduct) => {
    const rest = cart.filter(product => product.id !== selectedProduct.id);
    setCart(rest);
    deleteItem(selectedProduct.id)
  }

  return (
    <section className="section order-review">
      <div className="order-review__items">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product} removeItem={removeItem} />
        ))}
      </div>
      <div className="order-review__cart">
        <Cart cart={cart}>
          <div className="cart__buttons">
            <button
              type="button"
              className="cart__btn cart__btn--danger mb-3"
              onClick={clearCart}
            >
              <span>Clear Cart</span>
              <FaTrash className="cart__btn-icon" />
            </button>
            <Link to="/shipping">
              <button type="button" className="cart__btn cart__btn--yellow">
                <span>Proceed Checkout</span>
                <FaRegCreditCard className="cart__btn-icon" />
              </button>
            </Link>
          </div>
        </Cart>
      </div>
    </section>
  );
};

export default Order;
