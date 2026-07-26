import React from "react";
import NewProduct from "./NewProduct";
import FeaturedProduct from "./FeaturedProduct";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      Products
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>
            {" "}
            <Link to="featured">Featured</Link>
          </li>
          <li>
            {" "}
            <Link to="new">New</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
