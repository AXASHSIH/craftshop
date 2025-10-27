import React from 'react'
import './Hero.css'
import banner from '../../assets/banner.png'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h1>Welcome to Craftshop</h1>
          <p>Your one-stop shop for handmade crafts and unique products.</p>
          <Link to="products"><button className='hero-left-btn'>Shop Now</button></Link>
        </div>
        <div className="hero-right">
          <img src={banner} alt="Craftshop baner" />
        </div>
      </div>
    </>
  )
}

export default Hero