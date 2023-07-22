import React, { useState } from 'react';
import './common.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace with your authentication logic (e.g., check credentials against a backend server)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      // Authentication success, save email to local storage
      localStorage.setItem('email', email);
      alert('Login successful!');
      navigate('/products'); // Redirect to the products page after successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="container login-container">
        <h1>Login</h1>
        <form id="login-form" onSubmit={handleLogin}>
          {/* Login form fields */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;