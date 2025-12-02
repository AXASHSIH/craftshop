import React from "react";
import "./ProductsBreadcrumbs.css";
import { Link } from "react-router-dom";

const ProductsBreadcrumbs = ({ product }) => {

  return (
    <nav className="breadcrumbs">
      <span><Link to="/">Home</Link></span>
      {" / "}
      <Link to="/products">Shop</Link>
      {" / "}
      <span>{product?.name || "Product"}</span>
    </nav>
  );
};

export default ProductsBreadcrumbs;
