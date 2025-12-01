import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import { About } from "./Pages/About";
import Contact from "./Pages/Contact";
import LoginSignup from "./Pages/LoginSignup";
import { Routes, Route } from "react-router-dom";  // ✅ removed BrowserRouter
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes are handled by BrowserRouter in main.jsx */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
