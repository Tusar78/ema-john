import React from "react";

const Shipping = () => {
  return (
    <section className="section">
      <div className="shipping">Shipping!</div>
      <form className="shipping-form">
        <div className="shipping__group">
          <label htmlFor="name" className="shipping__label">Name</label>
          <input type="text" id="name" name="name" className="shipping__input" />
        </div>
        <div className="shipping__group">
          <label htmlFor="address" className="shipping__label">Address</label>
          <input type="text" id="address" name="address" className="shipping__input" />
        </div> 
        <div className="shipping__group">
          <label htmlFor="number" className="shipping__label">Number</label>
          <input type="number" id="number" name="number" className="shipping__input" />
        </div> 
        <div className="shipping__group">
          <label htmlFor="email" className="shipping__label">Email</label>
          <input type="email" id="email" name="email" className="shipping__input" />
        </div> 
        <div className="shipping__group">
          <button type="submit" className="shipping__button">Place Order</button>
        </div> 
      </form>
    </section>
  );
};

export default Shipping;
