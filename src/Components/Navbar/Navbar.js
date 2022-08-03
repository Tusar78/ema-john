import React from "react";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <a href="#home" className="nav__logo">
          <img
            src="images/logo.svg"
            alt="Website Logo"
            className="nav__logo-img"
          />
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#order" className="nav__link">
                Order
              </a>
            </li>
            <li className="nav__item">
              <a href="#order-review" className="nav__link">
                Order Review
              </a>
            </li>
            <li className="nav__item">
              <a href="#manage-inventory" className="nav__link">
                Manage Inventory
              </a>
            </li>
            <li className="nav__item">
              <a href="#login" className="nav__link">
                Login
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle">
          <MdMenuOpen className="nav__toggle-icon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
