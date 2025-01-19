import { AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";

function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto w-[90%] p-6 mt-20 text-center md:text-start border-t border-gray-300">
      {/* Brand Section */}
      <div className="flex flex-col items-center md:items-start gap-3 border-b md:border-none pb-6 md:pb-0">
        <h1 className="font-clash text-4xl font-bold">HavenHome</h1>
        <p className="text-wrap max-w-[300px] font-sans text-sm text-gray-600">
          A selection of high-quality furniture pieces designed to elevate the style of any living space.
        </p>
        <p className="font-clash font-semibold text-sm">+234904567897</p>
        <p className="font-clash font-semibold text-sm">havenhomes@gmail.com</p>
      </div>

      {/* Customer Service */}
      <div className="border-b md:border-none pb-6 md:pb-0">
        <h1 className="mb-5 font-clash font-semibold text-2xl">Customer Service</h1>
        <ul className="list-none flex flex-col items-center md:items-start gap-3">
          <li>
            <a
              href="/online-payment"
              className="font-sans text-xl hover:underline cursor-pointer"
            >
              Online Payment
            </a>
          </li>
          <li>
            <a href="/returns" className="font-sans text-xl hover:underline cursor-pointer">
              Returns
            </a>
          </li>
          <li>
            <a href="/refund-policy" className="font-sans text-xl hover:underline cursor-pointer">
              Refund Policy
            </a>
          </li>
          <li>
            <a href="/shipping" className="font-sans text-xl hover:underline cursor-pointer">
              Shipping
            </a>
          </li>
          <li>
            <a href="/faq" className="font-sans text-xl hover:underline cursor-pointer">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Information */}
      <div className="border-b md:border-none pb-6 md:pb-0">
        <h1 className="mb-5 font-clash font-semibold text-2xl">Information</h1>
        <ul className="list-none flex flex-col items-center md:items-start gap-3">
          <li>
            <a href="/about" className="font-sans text-xl hover:underline cursor-pointer">
              About Us
            </a>
          </li>
          <li>
            <a href="/work-with-us" className="font-sans text-xl hover:underline cursor-pointer">
              Work with Us
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="font-sans text-xl hover:underline cursor-pointer">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/enquiries" className="font-sans text-xl hover:underline cursor-pointer">
              Enquiries
            </a>
          </li>
          <li>
            <a href="/contact" className="font-sans text-xl hover:underline cursor-pointer">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="border-b md:border-none pb-6 md:pb-0">
        <h1 className="font-clash font-semibold text-2xl mb-5">Follow Us</h1>
        <div className="flex flex-col items-center md:items-start gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            <AiFillInstagram size={30} color="#E4405F" />
            <span className="font-sans text-lg">Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            <AiFillFacebook size={30} color="#1877F2" />
            <span className="font-sans text-lg">Facebook</span>
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            <AiOutlineWhatsApp size={30} color="#25D366" />
            <span className="font-sans text-lg">WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
