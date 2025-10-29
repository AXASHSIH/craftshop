import React from "react";
import "../TopSellingProducts/TopSellingProducts.css";
import Logo from "../../../assets/Products/product_1.jpeg";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "White Valentine Bottle",
    price: "Rs 500.00",
    image: Logo,
  },
  {
    id: 2,
    name: "Macrame Wall Hanging",
    price: "Rs 500.00",
    image: Logo,
  },
  {
    id: 3,
    name: "Ceramic Coffee Mug Set",
    price: "Rs 500.00",
    image: Logo,
  },
  {
    id: 4,
    name: "Handwoven Jute Basket",
    price: "Rs 500.00",
    image: Logo,
  },
];

const TopSellingProducts = () => {
  return (
    <section className="top-selling-section">
      <div className="top-selling-container">
        <h2 className="top-selling-title">Our Top Selling Products</h2>
        <p className="top-selling-subtitle">
          Discover the handmade creations our customers love the most — crafted with care and passion.
        </p>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <Link to="/product">
              <button className="product-button">Shop Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
