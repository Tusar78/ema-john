import React from "react";
import Cart from "../Cart/Cart";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { FaRegCreditCard, FaTrash } from "react-icons/fa";

const Order = () => {
  const [Products, setProducts] = useProducts();
  const [cart, setCart] = useCart(Products);
  return (
    <section className="section order-review">
      <div className="order-review__items">
        {
          cart.map(product => <ReviewItem key={cart.id} product={product} />)
        }
      </div>
      <div className="order-review__cart">
        <Cart cart={cart}>
          <div className="cart__buttons">
            <button
              type="button"
              className="cart__btn cart__btn--danger mb-3"
            >
              <span>Clear Cart</span>
              <FaTrash className="cart__btn-icon" />
            </button>
            <Link to="/order-review">
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
