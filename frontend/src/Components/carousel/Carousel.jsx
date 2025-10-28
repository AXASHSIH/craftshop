import React, { useState, useEffect } from "react";
import "./Carousel.css";
import carousel1 from "../../assets/carousel1.jpeg";
// import carousel2 from "../../assets/carousel2.jpeg";

const Carousel = () => {    
  const images = [
    carousel1,
    carousel1,
    carousel1,
    carousel1,


  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img src={img} alt={`slide-${index}`} />

            {/* Overlay content shown on top of each slide */}
            <div className="carousel-overlay" aria-hidden={false}>
              <div className="overlay-content">
                <h2 className="overlay-title">Handmade Bottle Craft</h2>
                <p className="overlay-desc">Unique, handcrafted item — limited stock.</p>
                <button
                  className="buy-btn"
                  onClick={() => {
                    // simple navigation to products page; replace with router navigation if needed
                    window.location.href = "/";
                  }}
                  aria-label={`Buy craft ${index + 1}`}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
