import "./index.css";
import Header from "./constant/Header";
import Footer from "./constant/Footer";
import Home from "./home/index";
import WhoWeAre from "./who we are";
import ProductCategory from "./product category";
import Shop from "./shop";
import Cart from "./cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<WhoWeAre />} />
        <Route path="/products" element={<ProductCategory />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
