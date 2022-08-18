import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar">
      <nav className="nav">
        <Link to="/" className="nav__logo">
          <img
            src="images/logo.svg"
            alt="Website Logo"
            className="nav__logo-img"
          />
        </Link>

        <div className={toggle ? "nav__menu block" : "nav__menu hidden sm:block"}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/order" className="nav__link">
                Order
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/order-review" className="nav__link">
                Order Review
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/manage-inventory" className="nav__link">
                Manage Inventory
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/login" className="nav__link">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" onClick={handleToggle}>
          {toggle ? (
            <MdOutlineClose className="nav__toggle-icon" />
          ) : (
            <MdOutlineMenu className="nav__toggle-icon" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
