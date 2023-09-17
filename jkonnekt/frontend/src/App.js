// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import ProductsPage from './ProductsPage';
import Navbar from './Navbar'; // Import the new Navbar component
import './common.css';
import { useUserContext } from './UserContext';


function App() {
  const { user } = useUserContext();
  

  return (
    <Router>
      <div>

        <Navbar />
        <ProductsPage/>
        

        <Routes>
          {/* Define routes using the "element" prop instead of "component" */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {user ? (
            <>
              <Route path="/products" element={<ProductsPage />} />
              <Route index element={<ProductsPage />} /> {/* Use "index" to match the homepage */}
            </>
          ) : (
            <Route element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>

      
    </Router>
  );
}

export default App;
