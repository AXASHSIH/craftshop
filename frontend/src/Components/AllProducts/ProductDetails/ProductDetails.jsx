import React, { useState } from "react";
import "./ProductDetails.css";

const tabs = {
  Description: "Each Craftshop product is handmade with care. Minor variations make every piece unique.",
  Specifications: "Material: Teak Wood | Dimensions: 10x10x5 inches | Finish: Natural Polish",
  Care: "Wipe with a soft dry cloth. Avoid water exposure.",
};

const ProductDetails = () => {
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
