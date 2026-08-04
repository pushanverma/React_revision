import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "white" : "purple",
    };
  };
  return (
    <>
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>
            <NavLink to="/" style={navLinkStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navLinkStyles}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" style={navLinkStyles}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" style={navLinkStyles}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
