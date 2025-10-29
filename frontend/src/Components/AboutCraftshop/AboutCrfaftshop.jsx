import React from "react";
import "./AboutCraftshop.css";

const AboutCraftshop = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2 className="about-title">About Craftshop</h2>

        <p className="about-text">
          Welcome to <span className="highlight">Craftshop</span>, your go-to destination for
          beautifully handcrafted products made with passion, precision, and purpose. From
          home décor to thoughtful gifts, every item we create is a celebration of creativity,
          culture, and craftsmanship — designed to bring warmth and uniqueness to your space.
        </p>

        <h3 className="about-subtitle">Our Mission</h3>
        <p className="about-text">
          At Craftshop, our mission is to support artisans and promote sustainable craftsmanship.
          We believe in creating high-quality, handmade products that tell a story — one that
          connects tradition with modern design. Every product is crafted with care, ensuring
          durability, functionality, and beauty in every detail.
        </p>

        <h3 className="about-subtitle">Why Choose Craftshop?</h3>
        <ul className="about-list">
          <li>Authentic handmade products crafted by skilled artisans</li>
          <li>Premium quality materials with eco-friendly practices</li>
          <li>Reliable and fast delivery, straight from our workshop to your home</li>
          <li>Easy returns and friendly customer support</li>
          <li>Unique, limited-edition designs you won’t find anywhere else</li>
        </ul>

        <h3 className="about-subtitle">Our Vision</h3>
        <p className="about-text">
          We envision a world where handmade artistry is celebrated and valued. At Craftshop,
          we’re dedicated to preserving traditional techniques while embracing modern innovation
          — creating timeless pieces that inspire, connect, and endure.
        </p>

        <div className="about-cta">
          <h4 className="cta-title">Join the Craftshop Family</h4>
          <p className="cta-text">
            Whether you’re decorating your home, gifting someone special, or simply exploring
            handmade art — Craftshop offers something truly special for everyone who values
            authenticity and craftsmanship.
          </p>
          <button className="cta-button">Start Shopping</button>
        </div>
      </div>
    </section>
  );
};

export default AboutCraftshop;
