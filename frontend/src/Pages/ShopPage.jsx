import React, { useState } from "react";
import FilterSidebar from "../Components/Shop/FilterSidebar/FilterSidebar";
import ProductCard from "../Components/Shop/ProductCard/ProductCard";
import "./ShopPage.css";

const sampleProducts = [
  {
    id: 1,
    name: "Handmade Clay Vase",
    price: 45,
    image: "https://via.placeholder.com/300x300?text=Clay+Vase",
    category: "Home Decor",
  },
  {
    id: 2,
    name: "Macrame Wall Hanging",
    price: 60,
    image: "https://via.placeholder.com/300x300?text=Macrame",
    category: "Wall Art",
  },
  {
    id: 3,
    name: "Wooden Bowl",
    price: 35,
    image: "https://via.placeholder.com/300x300?text=Wooden+Bowl",
    category: "Kitchen",
  },
  {
    id: 4,
    name: "Jute Storage Basket",
    price: 55,
    image: "https://via.placeholder.com/300x300?text=Jute+Basket",
    category: "Home Decor",
  },
];

const ShopPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === filter);

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop Handmade Products</h1>
      <div className="shop-container">
        <FilterSidebar setFilter={setFilter} />
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
