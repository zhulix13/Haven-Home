import React, { useState } from "react";
import vector from "../../../assets/shop/Vector.png";
import { FaWhatsapp, FaShoppingCart, FaArrowRight } from "react-icons/fa"; // For WhatsApp, shopping cart, and arrow icons
import products from "./productslist.js";
import { Link, NavLink } from "react-router-dom";

function Products({ cart, setCart }) {
  const [notification, setNotification] = useState(""); // Notification state

  // Function to add a product to the cart
  function addToCart(id) {
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd && !cart.some((item) => item.id === id)) {
      setCart((prevCart) => [...prevCart, productToAdd]);
      showNotification(`${productToAdd.name} added to cart!`);
    }
  }

  // Function to show a notification
  function showNotification(message) {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000); // Hide notification after 3 seconds
  }

  // Function to generate WhatsApp message from cart
  function generateWhatsAppMessage() {
    if (cart.length === 0) {
      return "Your cart is empty.";
    }

    let message = "Hi, I want to order the following items:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₦${item.price}\n`;
    });

    return message;
  }

  // Redirect to WhatsApp with the cart details
  function sendToWhatsApp() {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348140412354?text=${encodedMessage}`;
    const newWindow = window.open(whatsappUrl, "_blank");

    if (newWindow) {
      setCart([]); // Clear cart only if the WhatsApp window opens
    } else {
      alert("Failed to open WhatsApp. Please check your pop-up settings.");
    }
  }

  return (
    <section className="mt-8 relative flex flex-col items-center">
      {/* Filter Section */}
      <div className="flex items-center gap-2">
        <img src={vector} alt="filter" className="h-5 w-5" />
        <p className="font-sans text-base md:text-xl">Filter</p>
      </div>

      {/* Notification Section */}
      {notification && (
        <div className="fixed z-[150] top-7 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition-opacity duration-300">
          {notification}
        </div>
      )}

      {/* Cart Indicator */}
      <NavLink
         to="/cart"
         >
        <div className=" fixed right-3 md:right-6 z-[150] md:top-70 hidden md:flex items-center gap-2">
          <FaShoppingCart className="text-4xl text-gray-700" />
          <div className="bg-red-500 text-white text-base font-semibold rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
            {cart.length}
          </div>
        </div>
      </NavLink>

      {/* Product List */}
      <div className="grid grid-cols-2  gap-y-8 w-full gap-x-3 max-w-[85%] mx-auto mt-4 items-center md:grid-cols-3">
        {products.map((product) => (
          <div className="flex flex-col space-y-1" key={product.id}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="font-sans text-base px-1 md:text-2xl font-medium">
              {product.name}
            </div>
            <div className="flex items-center w-full md:max-w-[70%] justify-between">
              <p className="font-sans flex-shrink text-base md:text-2xl font-medium">{`₦ ${product.price}`}</p>
              <div className="flex items-center flex-shrink bg-gray-200 px-4 py-2 rounded-lg">
                {/* WhatsApp Icon */}
                <button
                  onClick={() => sendToWhatsApp()}
                  className="flex items-center justify-center text-green-500 text-base md:text-xl"
                >
                  <FaWhatsapp />
                </button>
                <div className="mx-2 h-6 border-r border-gray-400"></div>
                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product.id)}
                  className="flex items-center justify-center text-gray-700 text-base md:text-xl"
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="mt-10">
        <button className="flex items-center font-clash justify-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          <span className="mr-2">See All</span>
          <FaArrowRight />
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col mt-[70px] items-center justify-center space-y-6">
        <h1 className="text-center font-sans text-2xl md:text-3xl font-bold">
          Subscribe to our newsletter
        </h1>
        <form action="" className="w-full md:max-w-[90%] space-y-4">
          <div className="flex items-center justify-center w-full">
            <input
              type="email"
              className="border border-gray-500 outline-none rounded-full py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
              placeholder="Email:"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Products;
