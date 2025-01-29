import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../../constant/Header";
import { FaShoppingCart, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

function CartItem() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Handle increasing quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Handle decreasing quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Handle removing item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Redirect to shop
  const goToShop = () => {
    navigate("/shop");
  };

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="container mx-auto py-28">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
               <FaShoppingCart className="w-40 h-40 md:w-60 text-blue-600 md:h-60 object-contain"/>
            <h2 className="text-gray-600 text-xl md:text-2xl mt-4 font-semibold">
              Your cart is empty
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-2 text-center">
              Browse our shop to find amazing products.
            </p>
            <button
              onClick={goToShop}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Go to Shop
            </button>
          </div>
        ) : (
          <div className="grid gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between space-x-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">₦{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <FaMinus className="text-gray-600" />
                  </button>
                  <span className="px-4 py-1 bg-gray-100 rounded-lg">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <FaPlus className="text-gray-600" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CartItem;
