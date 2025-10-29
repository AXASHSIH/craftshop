import React from "react";
import "./ProductsBreadcrumbs.css";
import { Link } from "react-router-dom";

const ProductsBreadcrumbs = () => (
  <nav className="breadcrumbs">
    <span><Link to="/">Home</Link></span> / <Link to="/products">Shop</Link> / <span><Link to="/product">Handcrafted Wooden Bowl</Link></span>
  </nav>
);

export default ProductsBreadcrumbs;
