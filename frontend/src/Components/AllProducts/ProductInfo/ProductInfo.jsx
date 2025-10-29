import React from "react";
import "./ProductInfo.css";

const ProductInfo = () => {
  return (
    <div className="product-info">
      <h1 className="product-title">Handcrafted Wooden Bowl</h1>
      <p className="product-price">$45.00</p>
      <p className="product-short-desc">
        Beautifully handmade wooden bowl perfect for home décor or dining. Crafted from sustainable wood with a smooth finish.
      </p>

      <div className="product-actions">
        <input type="number" defaultValue={1} min={1} className="quantity-input" />
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <p className="product-stock">✅ In Stock – ready to ship</p>
    </div>
  );
};

export default ProductInfo;
