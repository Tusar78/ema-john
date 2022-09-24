import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

        <div
          className={toggle ? "nav__menu block" : "nav__menu hidden sm:block"}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive ? 'nav__link text-yellow-400' : 'nav__link'
                }
              >
                Order
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/order-review" className={({ isActive }) =>
                  isActive ? 'nav__link text-yellow-400' : 'nav__link'
                }>
                Order Review
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/manage-inventory" className={({ isActive }) =>
                  isActive ? 'nav__link text-yellow-400' : 'nav__link'
                }>
                Manage Inventory
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/login" className={({ isActive }) =>
                  isActive ? 'nav__link text-yellow-400' : 'nav__link'
                }>
                Login
              </NavLink>
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
