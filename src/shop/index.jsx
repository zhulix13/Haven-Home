import HeroSection from "./components/hero-section";
import Products from "./components/products/products.jsx";
import { useState } from "react";

function Shop(){

   const [cart, setCart] = useState([])

   return(

      <>
         <HeroSection cartLength = {cart.length}/>
         <Products
          cart={cart}
          setCart={setCart}
          />
      </>
   )
}

export default Shop;