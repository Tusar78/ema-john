import React from "react";
import { FaTrash } from "react-icons/fa";

const Order = () => {
  return (
    <section className="section order-review">
      <div className="order-review__item">
        <div className="order-review__item-info">
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg"
            alt="images"
            className="order-review__img"
          />
          <div className="order-review__description">
            <h4 className="order-review__name">Ultraboost 22 Shoes</h4>
            <p className="order-review__price">
              Price:
              <span className="text-[#FF9900]">$190</span>
            </p>
            <p className="order-review__shipping">
              Shipping Charge:
              <span className="text-[#FF9900]">$190</span>
            </p>
          </div>
        </div>
        <div className="order-review__item-delete">
          <button className="order-review__item-delete-btn">
            <FaTrash className="order-review__icon" />
          </button>
        </div>
      </div>
      <div className="order-review__cart"></div>
    </section>
  );
};

export default Order;
