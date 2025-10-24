import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";

function App() {


  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Route>
        <Route path="/" element={<Shop/>}/>
        <Route path="/products" element={<ShopCategory Category="products"/>}/>
        <Route path="/about" element={<ShopCategory Category="about"/>}/>
        <Route path="/contact" element={<ShopCategory Category="contact"/>}/>


      </Route>     
            
      </BrowserRouter>

    </div>

    </>
  )
}

export default App
