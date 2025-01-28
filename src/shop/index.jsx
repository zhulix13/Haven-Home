import HeroSection from "./components/hero-section";
import Products from "./components/products/products";
import { CartContext } from '../CartContext.jsx'
import { useContext } from "react";

function Shop(){

   const {cart, setCart} = useContext(CartContext) 

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