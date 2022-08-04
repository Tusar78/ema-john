import React from 'react';
import { AiOutlineDelete, AiOutlineArrowRight } from 'react-icons/ai'

const Cart = () => {
  return (
    <div className='cart'>
      <h4 className="cart__summery">Order Summery</h4>
      <div className="card__description">
        <p className='card__desc-single'>Selected Item: 6</p>
        <p className='card__desc-single'>Total Price: $1424</p>
        <p className='card__desc-single'>Total Shipping Charge: $24</p>
        <p className='card__desc-single'>Tax: $37</p>
      </div>
      <h5 className="cart__grand-total">Grand Total: $2458</h5>
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