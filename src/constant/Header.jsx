import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false); // Close the menu on larger screens
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`py-4 px-6 fixed w-full transition-all z-20 duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className={`font-clash text-[45px] font-bold ${
            isScrolled
              ? 'text-black'
              : 'bg-gradient-to-r from-[#E0EAFE] via-[#96B8FC] to-[#96B8FC] bg-clip-text text-transparent'
          }`}
        >
          HavenHome
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 scale-125' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              // X Symbol
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              // Hamburger Icon
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Navbar Links for Desktop */}
        <div className={`hidden md:flex md:flex-row md:w-[50%] justify-between items-center`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-sans text-[25px] font-medium ${
                isActive ? 'border-b-2 border-[#E0EAFE] rounded-[1px]' : ''
              } py-2 px-4 ${isScrolled ? 'text-black' : ''}`
            }
            aria-label="Go to the homepage"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-sans text-[25px] font-medium ${
                isActive ? 'border-b-2 border-[#E0EAFE] rounded-[1px]' : ''
              } py-2 px-4 ${isScrolled ? 'text-black' : ''}`
            }
            aria-label="Learn more about who we are"
          >
            Who we are
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `font-sans text-[25px] font-medium ${
                isActive ? 'border-b-2 border-[#E0EAFE] rounded-[1px]' : ''
              } py-2 px-4 ${isScrolled ? 'text-black' : ''}`
            }
            aria-label="Browse our product categories"
          >
            Product Category
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `font-sans text-[25px] font-medium ${
                isActive ? 'border-b-2 border-[#E0EAFE] rounded-[1px]' : ''
              } py-2 px-6 rounded-3xl ${isScrolled ? 'text-black' : ''}`
            }
            aria-label="Visit our shop"
          >
            Shop
          </NavLink>
        </div>
      </nav>

      {/* Slide-in Mobile Menu from Right */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-r w-full from-[#E0EAFE] via-[#96B8FC] to-[#96B8FC] z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        
      >
        <div className="flex flex-col items-start p-6">
          <NavLink
            to="/"
            className="text-white text-2xl py-2 w-full text-left"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white text-2xl py-2 w-full text-left"
            onClick={toggleMenu}
          >
            Who we are
          </NavLink>
          <NavLink
            to="/products"
            className="text-white text-2xl py-2 w-full text-left"
            onClick={toggleMenu}
          >
            Product Category
          </NavLink>
          <NavLink
            to="/shop"
            className="text-white text-2xl py-2 w-full text-left"
            onClick={toggleMenu}
          >
            Shop
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
