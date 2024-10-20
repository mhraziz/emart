//import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import {Routes,Route} from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Contact from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Register from "./component/Register";
import Cart from "./component/Cart";




const App = () => {
  return (
    <>
      <Navbar />
    
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />  
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
