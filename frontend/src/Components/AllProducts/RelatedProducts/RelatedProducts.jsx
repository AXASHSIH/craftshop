import React from "react";
import "./RelatedProducts.css";

const products = [
  { id: 1, name: "Macrame Wall Hanging", price: "$60", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Jute Basket", price: "$55", image: "https://via.placeholder.com/200" },
  { id: 3, name: "Ceramic Mug Set", price: "$35", image: "https://via.placeholder.com/200" },
];

const RelatedProducts = () => (
  <div className="related">
    <h2>You May Also Like</h2>
    <div className="related-grid">
      {products.map((p) => (
        <div key={p.id} className="related-card">
          <img src={p.image} alt={p.name} />
          <h4>{p.name}</h4>
          <p>{p.price}</p>
          <button>View Product</button>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedProducts;
