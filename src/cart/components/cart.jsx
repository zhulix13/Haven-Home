import React, { useContext } from "react"
import { CartContext } from "../../CartContext"
import { useNavigate } from "react-router-dom"
import Header from "../../constant/Header"
import { FaShoppingCart, FaPlus, FaMinus, FaTrash } from "react-icons/fa"

function CartItem() {
  const { cart, setCart } = useContext(CartContext)
  const navigate = useNavigate()

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
    )
    setCart(updatedCart)
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  const goToShop = () => {
    navigate("/shop")
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(price)
  }

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="container mx-auto py-28 px-4 sm:px-6 lg:px-8">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <FaShoppingCart className="w-40 h-40 md:w-60 text-blue-600 md:h-60 object-contain" />
            <h2 className="text-gray-600 text-xl md:text-2xl mt-4 font-semibold">Your cart is empty</h2>
            <p className="text-gray-500 text-sm md:text-base mt-2 text-center">
              Browse our shop to find amazing products.
            </p>
            <button
              onClick={goToShop}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Go to Shop
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-48 w-full object-cover md:w-48"
                    />
                  </div>
                  <div className="p-8 w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-gray-600 text-lg mb-4">{formatPrice(item.price)} each</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition duration-300 ease-in-out"
                        aria-label="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <div className="flex-col space-y-4 md:flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-2 bg-gray-100 text-gray-600 rounded-l-lg hover:bg-gray-200 transition duration-300 ease-in-out"
                          aria-label="Decrease quantity"
                        >
                          <FaMinus />
                        </button>
                        <span className="px-4 py-2 bg-white text-gray-800 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="p-2 bg-gray-100 text-gray-600 rounded-r-lg hover:bg-gray-200 transition duration-300 ease-in-out"
                          aria-label="Increase quantity"
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <p className="text-xl font-bold text-blue-600">
                        Total: {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CartItem

