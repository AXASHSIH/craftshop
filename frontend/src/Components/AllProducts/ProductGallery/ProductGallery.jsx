import React, { useState } from "react";
import "./ProductGallery.css";
import Logo from "../../../assets/Products/product_1.jpeg";
import Logo2 from "../../../assets/Products/product_2.jpg";  

const images = [
Logo,
Logo2,
Logo,
Logo,
];

const   ProductGallery = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="gallery">
      <img src={mainImage} alt="Product" className="gallery-main" />
      <div className="gallery-thumbs">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="thumb"
            className={`thumb ${mainImage === img ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
