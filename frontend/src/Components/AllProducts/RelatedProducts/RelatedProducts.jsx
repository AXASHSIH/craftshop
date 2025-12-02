import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api";
import "./RelatedProducts.css";

const RelatedProducts = ({ currentProduct }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentProduct) return;

    setLoading(true);

    api.get("/products/")
      .then((res) => {
        const filtered = res.data.filter(
          (p) =>
            p.id !== currentProduct.id &&
            p.category === currentProduct.category
        );

        setRelated(filtered.slice(0, 4)); // ✅ show max 4
      })
      .catch((err) => console.error("Related products error:", err))
      .finally(() => setLoading(false));
  }, [currentProduct]);

  if (loading) return <p>Loading related products...</p>;

  if (related.length === 0) return null;

  return (
    <div className="related">
      <h2>You May Also Like</h2>
      <div className="related-grid">
        {related.map((p) => (
          <div key={p.id} className="related-card">
            {p.image ? (
              <img src={p.image} alt={p.name} />
            ) : (
              <div className="no-image">No Image</div>
            )}

            <h4>{p.name}</h4>
            <p>₹{p.price}</p>

            <Link to={`/product/${p.id}`}>
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
