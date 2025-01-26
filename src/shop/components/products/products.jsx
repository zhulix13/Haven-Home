import vector from "../../../assets/shop/Vector.png";
import { FaWhatsapp } from "react-icons/fa"; // For WhatsApp icon
import { FaShoppingCart } from "react-icons/fa"; // For shopping cart icon
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
import products from "./products.js";

function Products() {
  return (
    <section className="mt-8 flex flex-col items-center">
      <div className="flex items-center gap-2">
        <img src={vector} alt="filter" className="h-5 w-5" />
        <p className="font-sans text-base md:text-xl">Filter</p>
      </div>

      <div className="grid grid-cols-2 w-[90%] gap-y-8 gap-x-3  mx-auto mt-4 items-center md:grid-cols-3  ">
        {products.map((product) => (
          <div className="flex flex-col  space-y-1" key={product.id}>
            <div>
              <img src={product.image} alt="furniture" />
            </div>
            <div className="font-sans text-base px-1 md:text-2xl font-medium">{product.name}</div>
            <div className="flex items-center w-full md:max-w-[80%] justify-between ">
              <p className="font-sans text-base md:text-2xl font-medium">{`₦ ${product.price}`}</p>
              <div className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
                {/* WhatsApp Icon */}
                <button className="flex items-center justify-center text-green-500 text-xl">
                  <FaWhatsapp />
                </button>
                <div className="mx-2 h-6 border-r border-gray-400"></div>
                {/* Shopping Cart Icon */}
                <button className="flex items-center justify-center text-gray-700 text-xl">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
      <button className="flex items-center font-clash justify-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
        <span className="mr-2">See All</span>
        <FaArrowRight />
      </button>
    </div>

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
