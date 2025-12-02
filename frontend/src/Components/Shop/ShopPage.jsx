import React, { useEffect, useState } from "react";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import ProductCard from "./ProductCard/ProductCard";
import "./ShopPage.css";
import api from "../../api";   // ✅ axios file

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch from backend
  useEffect(() => {
    setLoading(true);

    api.get("/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setError("Failed to load products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ✅ Filter logic remains same
  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop Handmade Products</h1>

      <div className="shop-container">
        <FilterSidebar setFilter={setFilter} />

        <div className="product-grid">
          {loading && <p>Loading products...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && filteredProducts.length === 0 && (
            <p>No products available.</p>
          )}

          {!loading &&
            !error &&
            filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
