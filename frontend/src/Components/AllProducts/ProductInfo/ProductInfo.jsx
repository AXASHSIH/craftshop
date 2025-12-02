import React from "react";
import "./ProductInfo.css";

const ProductInfo = ({ product }) => {
  if (!product) return null;

  // infer stock/availability
  const inStock =
    (product.is_available ?? true) &&
    (product.stock === undefined || product.stock > 0);

  return (
    <div className="product-info">
      <h1 className="product-title">{product.name}</h1>

      <p className="product-price">₹{product.price}</p>

      <p className="product-short-desc">
        {product.description ||
          "Beautiful handcrafted piece, made with care and attention to detail."}
      </p>

      <div className="product-actions">
        <input
          type="number"
          defaultValue={1}
          min={1}
          className="quantity-input"
        />
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <p className="product-stock">
        {inStock ? "✅ In Stock – ready to ship" : "❌ Out of stock"}
      </p>
    </div>
  );
};

export default ProductInfo;
