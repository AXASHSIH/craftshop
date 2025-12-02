import React, { useEffect, useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ product }) => {

  const allImages = [
    product.image,                        // main image first
    ...(product.images || []).map(i => i.image)
  ].filter(Boolean);                      // remove nulls

  const [mainImage, setMainImage] = useState(allImages[0]);

  useEffect(() => {
    setMainImage(allImages[0]);
  }, [product]);

  return (
    <div className="gallery">
      {mainImage ? (
        <img src={mainImage} alt={product.name} className="gallery-main" />
      ) : (
        <div className="gallery-main no-image">No image available</div>
      )}

      {allImages.length > 1 && (
        <div className="gallery-thumbs">
          {allImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className={`thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
