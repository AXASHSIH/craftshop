import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import { About } from "./Pages/About";
import Contact from "./Pages/Contact";
import LoginSignup from "./Pages/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";


function App() {


  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path="/cart" element={<Cart />} />
        {/* <Route path='/products' element={<ShopCategory Category="Products"/>}/> */}

      </Routes>     
      <Footer/> 
      </BrowserRouter>

    </div>

    </>
  )
}

export default App
