import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo"/>
            <p>Craftshop</p>
        </div>
        <div>
            <ul  className='nav-links'>
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className='nav-login'>
            <button>Login</button>
            <img src={cart_icon} alt=""/>
            <div className='cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar