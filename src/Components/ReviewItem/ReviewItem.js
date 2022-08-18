import React from "react";
import { FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ReviewItem = ({ product, removeItem }) => {
  const { img, name, price, shipping, quantity } = product;
  return (
    <div className="order-review__item">
      <div className="order-review__item-info">
        <img src={img} alt={name} className="order-review__img" />
        <div className="order-review__description">
          <h4 className="order-review__name" title={name.length > 20 ? name : ''}>{name.length > 20 ? name.substr(0, 20) + '...' : name }</h4>
          <div className="order-review__price">
            <div>
              Price:
              <span className="text-[#FF9900]">${price}</span>
            </div>
            <div className="order-review__quantity">
              <IoMdClose /> {quantity}
            </div>
          </div>
          <p className="order-review__shipping">
            Shipping Charge:
            <span className="text-[#FF9900]">${shipping}</span>
          </p>
        </div>
      </div>
      <div className="order-review__item-delete">
        <button className="order-review__item-delete-btn" onClick={() => removeItem(product)}>
          <FaTrash className="order-review__icon" />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
