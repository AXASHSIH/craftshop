import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <img
        src={product.image || "/no-image.png"}
        alt={product.name}
      />

      <h4>{product.name}</h4>

      <p>₹{product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>Buy Now</button>
      </Link>

    </div>
  );
};

export default ProductCard;
