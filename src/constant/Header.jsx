import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();  // Get the current location

  return (
    <header className='py-4 px-6 bg-transparent'>
      <nav className="flex justify-between items-center">
        <a 
          href="/" 
          className="font-clash text-[45px] font-bold bg-gradient-to-r from-[#E0EAFE] via-[#96B8FC] to-[#96B8FC] bg-clip-text text-transparent"
        >
          HavenHome
        </a>

        <div className="flex flex-col md:flex-row md:w-[50%] justify-between">
          <NavLink
            to="/"
            className={({ isActive }) => `
              font-sans text-[25px] font-medium 
              ${location.pathname === "/" ? "text-white" : "text-black"} 
              ${isActive ? "border-b-2 border-[#E0EAFE] rounded-[1px]" : ""}
              py-2 px-4
            `}
            aria-label="Go to the homepage"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `
              font-sans text-[25px] font-medium 
              ${location.pathname === "/" ? "text-white" : "text-black"} 
              ${isActive ? "border-b-2 border-[#E0EAFE] rounded-[1px]" : ""}
              py-2 px-4
            `}
            aria-label="Learn more about who we are"
          >
            Who we are
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => `
              font-sans text-[25px] font-medium 
              ${location.pathname === "/" ? "text-white" : "text-black"} 
              ${isActive ? "border-b-2 border-[#E0EAFE] rounded-[1px]" : ""}
              py-2 px-4
            `}
            aria-label="Browse our product categories"
          >
            Product Category
          </NavLink>

          {/* Shop NavLink */}
          <NavLink
            to="/shop"
            className={({ isActive }) => `
              font-sans text-[25px] font-medium 
              ${location.pathname === "/" 
                ? "bg-white text-black" // On homepage: white background, black text
                : "bg-blue-600 text-white"}  // On other pages: blue background, white text
              ${isActive ? "border-b-2 border-[#E0EAFE] rounded-[1px]" : ""}
              py-2 px-6 rounded-3xl
            `}
            aria-label="Visit our shop"
          >
            Shop
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
