import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { Menu, X, User } from "lucide-react";


const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="navbar">
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

                {/* Right: Login & Cart */}
                <div className="right-nav">
                <div className={`nav-login ${isOpen ? 'open' : ''}`}>
                    <Link to="/login">
                        <button onClick={() => { setIsOpen(false); }}>Login</button>
                    </Link>
                    <div className="cart">
                        <Link to="/cart">
                            <img src={cart_icon} alt="cart" />
                        </Link>
                        <div className="cart-count">0</div>
                    </div>
                </div>

                <div className='profile_menu'>
                    <p>Ashish Kumar Sahoo</p>
                    <  div className="profile-icon">
                <Link to="#">
                        <User size={30} color="#fff" />
                </Link>
                    </div>
                </div>
                

            </div>
            </div>
            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
            </div>
        </div>

    );
};

export default Navbar;
