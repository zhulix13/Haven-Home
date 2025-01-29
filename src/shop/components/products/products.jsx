import React, { useState, useEffect } from "react"
import { FaShoppingCart, FaArrowRight } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import products from "./productslist.js"
import vector from "../../../assets/shop/Vector.png"

function Products({ cart, setCart }) {
  const [notification, setNotification] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filterCategory, setFilterCategory] = useState("All")

  useEffect(() => {
    if (filterCategory === "All") {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => product.category === filterCategory))
    }
  }, [filterCategory])

  function addToCart(product) {
    if (!cart.some((item) => item.id === product.id)) {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
      showNotification(`${product.name} added to cart!`)
    } else {
      showNotification(`${product.name} is already in your cart.`)
    }
  }

  function showNotification(message) {
    setNotification(message)
    setTimeout(() => setNotification(""), 3000)
  }

  return (
    <section className="mt-8 relative flex flex-col items-center px-4 md:px-8">
      {/* Filter Section */}
      <div className="flex items-center gap-4 mb-6">
        <img src={vector || "/placeholder.svg"} alt="filter" className="h-5 w-5" />
        <select
          className="font-sans text-base md:text-xl bg-white border border-gray-300 rounded-md px-3 py-2"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          {/* Add more categories as needed */}
        </select>
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
        className="fixed right-3 md:right-6 z-[150] top-20 md:top-24 flex items-center gap-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <FaShoppingCart className="text-2xl md:text-3xl text-blue-600" />
        <div className="bg-red-500 text-white text-xs md:text-sm font-semibold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
          {cart.length}
        </div>
      </NavLink>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl mx-auto mt-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col space-y-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="font-sans text-lg md:text-xl font-medium truncate">{product.name}</h3>
            <p className="font-sans text-base md:text-lg font-bold text-blue-600">{`₦${product.price.toLocaleString()}`}</p>
            <button
              onClick={() => addToCart(product)}
              className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="mt-10">
        <button className="flex items-center font-clash justify-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
          <span className="mr-2">See All</span>
          <FaArrowRight />
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col mt-20 items-center justify-center space-y-6 w-full max-w-2xl">
        <h2 className="text-center font-sans text-2xl md:text-3xl font-bold">Subscribe to our newsletter</h2>
        <form className="w-full space-y-4">
          <div className="flex items-center justify-center w-full">
            <input
              type="email"
              className="border border-gray-300 outline-none rounded-full py-3 px-6 w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Products

