import './index.css'
import Header from './constant/Header'
import Home from './home/index';
import { BrowserRouter as Router,Routes ,Route, useLocation} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();

  // Check if the current page is "FirstPage"
  const isFirstPage = location.pathname === "/";

  return (
    <div>
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        
        {/* Add other routes */}
      </Routes>
    </div>
  );
}

export default App