import React, { useState } from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  const tabs = {
    Description: product.description || "No description available.",

    Specifications:
      product.specifications ||
      "No specifications provided for this product.",

    Care:
      product.care_instructions ||
      "Wipe with a soft dry cloth. Avoid water exposure.",
  };

  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="product-details">
      <div className="tab-header">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">{tabs[activeTab]}</div>
    </div>
  );
};

export default ProductDetails;
