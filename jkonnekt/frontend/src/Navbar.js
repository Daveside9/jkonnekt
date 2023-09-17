// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUserContext } from './UserContext';
import './Navbar.css'; // Import the CSS file for Navbar styles

function Navbar() {
  const { user, logout } = useUserContext();
  const location = useLocation();

  const handleLogout = () => {
    // Call the logout function from the context to log out the user
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">JKONNECT</div>
      <ul className="navbar-links">
        {/* Show "Login" and "Signup" when the user is not logged in */}
        {!user && (
          <>
           <Link style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', visibility: 'visible' }}>Services</Link>
          </>
        )}

        {/* Show "Logout" when the user is logged in and on the ProductPage */}
        {user && location.pathname === '/products' && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
