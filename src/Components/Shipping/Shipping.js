import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Shipping = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handleNumberBlur = (e) => {
    setNumber(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleShipping = (e) => {
    e.preventDefault();
    console.log(name, address, number, email);
  };

  return (
    <section className="section">
      <div className="shipping">
        <h2 className="shipping__title">Shipping!</h2>
        <form className="shipping-form" onSubmit={handleShipping}>
          <div className="shipping__group">
            <label htmlFor="name" className="shipping__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shipping__input"
              onBlur={handleNameBlur}
              required
            />
          </div>
          <div className="shipping__group">
            <label htmlFor="address" className="shipping__label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="shipping__input"
              onBlur={handleAddressBlur}
              required
            />
          </div>
          <div className="shipping__group">
            <label htmlFor="number" className="shipping__label">
              Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="shipping__input"
              onBlur={handleNumberBlur}
              required
            />
          </div>
          <div className="shipping__group">
            <label htmlFor="email" className="shipping__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shipping__input"
              onBlur={handleEmailBlur}
              value={user?.email}
              required
            />
          </div>
          <div className="shipping__group">
            <button type="submit" className="shipping__button">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Shipping;
