// Existing imports...
import { Link, useLocation } from 'react-router-dom';
// Existing code...

function Navbar() {
  // Existing code...

  return (
    <nav className="navbar">
      <div className="navbar-logo">JKONNECT</div>
      <ul className="navbar-links">
        {/* Show "Login" and "Signup" when the user is not logged in */}
        {!user && (
          <>
            <li>
              <Link to="/login" style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', visibility: 'visible' }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', visibility: 'visible' }}>
                Signup
              </Link>
            </li>
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
