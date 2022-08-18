import React from 'react';
import { AiOutlineDelete, AiOutlineArrowRight } from 'react-icons/ai'

const Cart = ({ cart }) => {
  let quantity = 0,
      total = 0,
      shipping = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className='cart'>
      <h4 className="cart__summery">Order Summery</h4>
      <div className="card__description">
        <p className='card__desc-single'>Selected Item: {quantity}</p>
        <p className='card__desc-single'>Total Price: ${total}</p>
        <p className='card__desc-single'>Total Shipping Charge: ${shipping}</p>
        <p className='card__desc-single'>Tax: ${tax}</p>
      </div>
      <h5 className="cart__grand-total">Grand Total: ${grandTotal}</h5>
      <div className="cart__buttons">
        <button type="button" className="cart__btn cart__btn--danger">
          <span>Clear Cart</span>
          <AiOutlineDelete className='cart__btn-icon' />
        </button>
        <button type="button" className="cart__btn cart__btn--yellow">
          <span>Review Order</span>
          <AiOutlineArrowRight className='cart__btn-icon' />
        </button>
      </div>
    </div>
  );
};

export default Cart;