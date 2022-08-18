import React from 'react';
import { AiOutlineDelete, AiOutlineArrowRight } from 'react-icons/ai'

const Cart = ({ cart, children }) => {
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
      {
        children
      }
    </div>
  );
};

export default Cart;