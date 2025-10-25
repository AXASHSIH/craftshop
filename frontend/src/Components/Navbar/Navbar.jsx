import React, { useState } from 'react'; // Import useState
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router';

const Navbar = () => {
    const [menu, SetMenu] = useState("Home");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo"/>
            <p>Craftshop</p>
        </div>
        <div>
            <ul  className='nav-links'>
                <li onClick={()=>{SetMenu("Home")}}><Link to= '/'>Home</Link>{menu === "Home"?<hr /> : <></>}</li>
                <li onClick={()=>{SetMenu("Products")}}><Link to= '/products'>Products</Link>{menu === "Products"?<hr /> : <></>}</li>
                <li onClick={()=>{SetMenu("About")}}><Link to= '/about'>About</Link>{menu === "About"?<hr /> : <></>}</li>
                <li onClick={()=>{SetMenu("Contact")}}><Link to= '/Contact'>Contact</Link>{menu === "Contact"?<hr /> : <></>}</li>
            </ul>
        </div>
        <div className='nav-login'>
            <Link to="/login">
            <button>Login </button>
            </Link>
            <div className="cart">
                <Link to="cart">
                    <img src={cart_icon} alt=""/>
                </Link>
                    <div className='cart-count'>0</div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar