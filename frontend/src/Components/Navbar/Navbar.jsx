import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { Menu, X, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";   // ✅ NEW

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // ✅ get auth state + actions
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <div className="navbar">
            <div className="navbarin">
                {/* Left: Logo */}
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>Craftshop</p>
                </div>

                <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    {/* Nav Links */}
                    <ul className="nav-links">
                        <li onClick={() => { setMenu("Home"); setIsOpen(false); }}>
                            <Link to="/">Home</Link>{menu === "Home" ? <hr /> : null}
                        </li>
                        <li onClick={() => { setMenu("Products"); setIsOpen(false); }}>
                            <Link to="/products">Products</Link>{menu === "Products" ? <hr /> : null}
                        </li>
                        <li onClick={() => { setMenu("About"); setIsOpen(false); }}>
                            <Link to="/about">About</Link>{menu === "About" ? <hr /> : null}
                        </li>
                        <li onClick={() => { setMenu("Contact"); setIsOpen(false); }}>
                            <Link to="/contact">Contact</Link>{menu === "Contact" ? <hr /> : null}
                        </li>
                    </ul>

                    {/* Right: Login/Logout & Cart */}
                    <div className="right-nav">
                        <div className={`nav-login ${isOpen ? 'open' : ''}`}>
                            <div className="cart">
                                <Link to="/cart">
                                    <img src={cart_icon} alt="cart" />
                                </Link>
                                <div className="cart-count">0</div>
                            </div>

                            {/* 🔐 Login / Logout button */}
                            {!isAuthenticated ? (
                                <Link to="/login">
                                    <button onClick={() => { setIsOpen(false); }}>Login</button>
                                </Link>
                            ) : (
                                <button
                                    className="logout-btn"
                                    onClick={() => {
                                        logout();
                                        setIsOpen(false);
                                    }}
                                >
                                    Logout
                                </button>
                            )}
                        </div>

                        {/* 👤 User name + icon (only when logged in) */}
                        <Link to={isAuthenticated ? "/profile" : "/login"} className="profile_menu">

                            <div className="profile-icon">
                                {isAuthenticated && user?.profile_image ? (
                                    <img src={user.profile_image} alt="Profile" />
                                ) : (
                                    <User size={30} color="#fff" />
                                )}
                            </div>

                            <p>
                                {isAuthenticated && user?.name ? `Hello, ${user.name}` : "Guest"}
                            </p>

                        </Link>



                    </div>
                </div>

                {/* Hamburger icon for mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
