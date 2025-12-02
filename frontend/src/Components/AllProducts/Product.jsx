import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Carousel from "../carousel/Carousel";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductsBreadcrumbs from "./ProductsBreadcrumbs/ProductsBreadcrumbs";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
import "./Product.css";

import api from "../../api.js"; // ✅ adjust path if needed

function Product() {
  const { id } = useParams();        // /product/:id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    api
      .get(`/products/${id}/`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load product.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="product-page">
        <p style={{ textAlign: "center", marginTop: "100px" }}>
          Loading product...
        </p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-page">
        <p style={{ textAlign: "center", marginTop: "100px" }}>
          {error || "Product not found."}
        </p>
      </div>
    );
  }

  return (
    <>
      <br />
      <br />
      <div className="product-page">
        {/* Breadcrumbs with product name */}
        <ProductsBreadcrumbs product={product} />

        <div className="product-main">
          {/* ✅ pass product into these */}
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* More sections using product data if you want */}
        <ProductDetails product={product} />
        <CustomerReviews productId={product.id} />
        <RelatedProducts currentProduct={product} />
        <ShippingInfo />
      </div>
    </>
  );
}

export default Product;
