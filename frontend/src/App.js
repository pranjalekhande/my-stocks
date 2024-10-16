import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StockSearch from './components/StockSearch';
import Portfolio from './components/Portfolio';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [portfolio, setPortfolio] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedPortfolio = localStorage.getItem('portfolio');
    if (storedPortfolio) {
      setPortfolio(JSON.parse(storedPortfolio));
    }
    // getToken(); // uncomment 
    // Simulate token fetching
    setToken("mock-token");
  }, []);

  const getToken = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/token');
      const newToken = response.data.token;
      setToken(newToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    } catch (error) {
      console.error('Error getting token:', error);
    }
  };

  const addToPortfolio = (stock) => {
    const updatedPortfolio = [...portfolio, stock];
    setPortfolio(updatedPortfolio);
    localStorage.setItem('portfolio', JSON.stringify(updatedPortfolio));
    toast.success('Stock added to portfolio!');
  };

  
  const clearPortfolio = () => {
    if (window.confirm("Are you sure you want to clear your portfolio?")) {
      setPortfolio([]);
      localStorage.removeItem('portfolio');
      toast.success('Portfolio cleared successfully!'); // Correct usage of toast
    }
  };

  return (
    <Router>
      <div className="App">
        <ToastContainer /> {/* This is just the container for the toasts */}
        {/* Navigation bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Stock Search</Link>
          <Link className="nav-link" to="/portfolio">My Portfolio</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">My Portfolio</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* App Routes */}
        <Routes>
          <Route path="/" element={<StockSearch addToPortfolio={addToPortfolio} token={token} />} />
          <Route path="/portfolio" element={<Portfolio portfolio={portfolio} clearPortfolio={clearPortfolio} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
