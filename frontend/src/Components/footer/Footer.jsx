import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src={logo}
            alt="Craftshop Logo"
            className="logo"
          />
          <h2>Craftshop</h2>
        </div>

        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get all the latest information, Sales and Offers.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Email address here..." />
            <button>SUBSCRIBE →</button>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>
            <strong>PHONE:</strong> Toll Free +91 8249799644, 7377875005
          </p>
          <p>
            <strong>EMAIL:</strong> mycraftshop.official@gmail.com
          </p>
          <p>
            <strong>ADDRESS:</strong> Near Gopabandhu Club, Bangursingh,Dhenkanal,
            Odisha 759019
          </p>
          <p>
            <strong>WORKING DAYS / HOURS:</strong>
            <br />
            Mon – Sun / 9:00 AM – 5:30 PM
          </p>
        </div>

        <div className="footer-section">
          <h4>Customer Policies</h4>
          <ul>
            <li>About Craftshop</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellations & Returns</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>Sign in</li>
            <li>My Wishlist</li>
            <li>Help</li>
            <li>My Account</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <p>© 2025 Craftshop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
