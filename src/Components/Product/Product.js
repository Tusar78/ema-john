import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt={name} className="product__img" />

      <div className="product__info">
        <h3 className="product__title">{name}</h3>
        <p className="product__price">Price: ${price}</p>
      </div>

      <div className="product__user-info">
        <p className="product__seller">Manufacturer: {seller}</p>
        <p className="product__rating">Rating: {ratings}</p>
      </div>

      <button type="button" className="product__btn" onClick={() => handleAddToCart(product)}>
        <span>Add to cart</span>
        <FaCartPlus className="product__icon" />
      </button>
    </div>
  );
};

export default Product;
