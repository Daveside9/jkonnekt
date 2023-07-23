// Existing imports...
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login'; // Correct the import path
import Signup from './Signup'; // Correct the import path
import ProductPage from './ProductPage'; // Correct the import path
// Existing code...

function App() {
  // Existing code...

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Existing routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {user ? (
            <>
              <Route path="/products" element={<ProductPage />} />
              <Route index element={<ProductPage />} /> {/* Use "index" to match the homepage */}
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
