// Component Imports
import Header from "../../constant/Header";
import Advert from "../../home/components/advert";

// Image Imports
import room1 from "../../assets/product-categories/Rectangle 85.png";
import room2 from "../../assets/product-categories/Rectangle 86.png";
import graySofa from "../../assets/product-categories/gray-sofa.png";
import pexels from "../../assets/product-categories/pexels.png";
import interior from "../../assets/product-categories/living-room-interior.png";
import pinkSofa from "../../assets/product-categories/pink-sofa.png";
import cream from "../../assets/product-categories/cream.png";
import posh from "../../assets/product-categories/posh.png";
import luxury from "../../assets/product-categories/luxury.png";
import pexels2 from "../../assets/product-categories/pexels2.png";
import chair from "../../assets/product-categories/chair.png";
import beige from "../../assets/product-categories/beige.png";
import restaurant from "../../assets/product-categories/restaurant.png";
import interior2 from "../../assets/product-categories/interior2.png";
import bestseller1 from "../../assets/product-categories/bestseller1.png";
import bestseller2 from "../../assets/product-categories/bestseller2.png";
import bestseller3 from "../../assets/product-categories/bestseller3.png";



function Categories() {
  return (
    <section>
      <Header />
      <div className="py-[150px]  flex flex-col max-w-[90%] mx-auto">

         {/* Discover Section */}
        <div className="flex flex-col justify-between space-y-3 mt-[80px]  md:flex-row  ">
          <div className=" space-y-5 ">
            <h1 className="font-clash text-3xl  md:text-4xl max-w-lg font-semibold">
              Discover our products categories.
            </h1>
            <p className="font-sans font-regular text-base text-wrap max-w-lg md:text-xl">
              Explore our wide range of high-quality products designed to suit
              every need. Whether you're looking for the latest trends,
              eco-friendly options, or budget-friendly solutions, we have
              something perfect just for you.
            </p>
          </div>
          <div className="flex  gap-6">
            <div>
              <img src={room1} alt="room" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <img src={room2} alt="room" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

         {/* Living Room Section */}
        <div className="flex flex-col mt-[120px] justify-between space-y-3  md:flex-row  ">
          <div className=" flex flex-col justify-center space-y-5 ">
            <h1 className="font-clash text-3xl md:text-4xl max-w-lg font-semibold">
              Living Room
            </h1>
            <p className="font-sans font-regular text-base text-wrap max-w-lg md:text-xl">
              Explore our carefully curated collection of living room
              essentials, where modern design meets unmatched comfort. From
              sleek sofas to elegant decor, each piece is crafted to elevate
              your space, creating the perfect setting for relaxation,
              conversation, and entertainment.
            </p>
            <div>
              <button className="bg-[#0044CC] hover:bg-[#1c2d50] hover:bg-[] py-2 px-3 text-white rounded-2xl text-base font-sans font-regular md:text-xl">
                See more designs
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-  gap-6">
            <div>
              <img
                src={interior}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={graySofa}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={pexels}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={pinkSofa}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
          </div>
        </div>

         {/* Bedroom Section */}
        <div className="flex flex-col mt-[120px] justify-between space-y-3  md:flex-row-reverse  ">
          <div className=" flex flex-col justify-center space-y-5 ">
            <h1 className="font-clash text-3xl md:text-4xl max-w-lg font-semibold">
              Bed Room
            </h1>
            <p className="font-sans font-regular text-base text-wrap max-w-lg md:text-xl">
              Discover our collection of bedroom essentials designed for
              ultimate relaxation and style. From luxurious bed frames to cozy
              bedding and ambient lighting, each piece is crafted to transform
              your bedroom into a peaceful sanctuary for restful nights and
              rejuvenating mornings.
            </p>
            <div>
              <button className="bg-[#0044CC] hover:bg-[#1c2d50] py-2 px-3 text-white rounded-2xl text-base font-sans font-regular md:text-xl">
                See more designs
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-  gap-6">
            <div>
              <img
                src={cream}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={luxury}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={pexels2}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={posh}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
          </div>
        </div>

         {/* Dining Room  Section*/} 
        <div className="flex flex-col mt-[120px] justify-between space-y-3  md:flex-row  ">
          <div className=" flex flex-col justify-center space-y-5 ">
            <h1 className="font-clash text-3xl md:text-4xl max-w-lg font-semibold">
              Dining Room
            </h1>
            <p className="font-sans font-regular text-base text-wrap max-w-lg md:text-xl">
              Explore our selection of dining room furniture that blends
              sophistication with functionality. From stylish dining tables to
              comfortable chairs, each piece is designed to enhance your dining
              experience, whether it’s for everyday meals or special gatherings
              with loved ones
            </p>
            <div>
              <button className="bg-[#0044CC] hover:bg-[#1c2d50] py-2 px-3 text-white rounded-2xl text-base font-sans font-regular md:text-xl">
                See more designs
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2   gap-6">
            <div>
              <img
                src={chair}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={beige}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={restaurant}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
            <div>
              <img
                src={interior2}
                alt="room"
                className="rounded-lg shadow-inset-gray"
              />
            </div>
          </div>
        </div>

         {/* Bestsellers */}
        <div className="mt-[100px] space-y-5 py-7 flex flex-col items-center gap-6 w-full">
          <h1 className="font-clash text-3xl text-center md:text-4xl font-semibold">
            Our Bestsellers!
          </h1>
          <div>
            <img
              src={bestseller1}
              className="rounded-lg shadow-inset-gray"
              alt="sofa"
            />
          </div>
          <div>
            <img
              src={bestseller2}
              className="rounded-lg shadow-inset-gray"
              alt="dining set"
            />
          </div>
          <div>
            <img
              src={bestseller3}
              className="rounded-lg shadow-inset-gray"
              alt="sofa"
            />
          </div>
          <div>
            <button className="font-sans bg-[#0044CC] hover:bg-[#1c2d50]  rounded-2xl py-1 px-3 text-base md:text-xl font-regular text-white flex items-center gap-2">
              View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-6-6l6 6m-6 6l6-6"
                />
              </svg>
            </button>
          </div>
        </div>

        

      </div>
      <Advert/>
    </section>
  );
}

export default Categories;
