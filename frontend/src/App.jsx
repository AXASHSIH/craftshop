import Navbar from "./Components/Navbar/Navbar";
import Products from "./Pages/Products";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import LoginSignup from "./Pages/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";


function App() {


  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path="/cart" element={<Cart />} />
        {/* <Route path='/products' element={<ShopCategory Category="Products"/>}/> */}

      </Routes>     
            
      </BrowserRouter>

    </div>

    </>
  )
}

export default App
