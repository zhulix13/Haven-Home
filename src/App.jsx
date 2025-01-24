import "./index.css";
import Header from "./constant/Header";
import Footer from "./constant/Footer";
import Home from "./home/index";
import WhoWeAre from "./who we are";
import ProductCategory from "./product category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<WhoWeAre />} />
        <Route path="/products" element={<ProductCategory />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
