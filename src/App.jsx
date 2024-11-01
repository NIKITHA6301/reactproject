import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";

import PurchaseHistory from "./PurchaseHistory";

import './App.css';
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";

 
function App()
{
  const cart = useSelector((state) => state.cart);
const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;


  return (
    <>
    <GoogleOAuthProvider clientId="59505442798-ktl2ip1r9nsnu5k76ack4l691p099cj9.apps.googleusercontent.com">
   <GoogleLoginComponent/>
 </GoogleOAuthProvider>
    

      <BrowserRouter>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/vegitems'>Veg Items</Link>
          <Link to='/nonvegitems'>Non-Veg Items</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
          <Link to='/purchasehistory'>Purchase History</Link>
          <Link to='/contactus'>Contact Us</Link>
          <Link to='/aboutus'>About Us</Link>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vegitems" element={<VegItems />} />
          <Route path="/nonvegitems" element={<NonVegItems />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchasehistory" element={<PurchaseHistory />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;


